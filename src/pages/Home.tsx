import { Box, Center, ChakraProvider, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { ButtonHellow } from "../components/Button/Button";
import { useContext, useState } from "react";
import { login } from "../services/login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { changeLocalStorage } from "../services/storage";
import { api } from "../api";

const  Home = () => {
   const [email, setEmail] = useState<string>("");
   const [password, setPassword] = useState<string>("");

   const {setIsLoggedIn} = useContext(AppContext)
   const navigate = useNavigate()

   const validate = async (email:string, password: string)=>{
      const logged = await login(email, password)
      if(!logged){
        return alert('Email invalido ');
      }
      const data: any = await api

         setIsLoggedIn(true)
         changeLocalStorage({login:true , user: data})
         navigate('/conta/1')
      

      
   }

   return (
     
      <Box>
           <Card>
            <ChakraProvider>
               <FormControl padding={90}>
                  <Center>
                     <Box mt='2' w='55%' alignItems='center' >
                     <Center>
                        <h1>Faca login </h1>                     
                     </Center>
                     <FormLabel>Email</FormLabel>
                     <Input size='sm' type='email' value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                     <FormLabel>Passoword</FormLabel>
                     <Input size='sm' type='password' value={password}
                        onChange={(e) => setPassword(e.target.value)}  />
                     <ButtonHellow  event={()=>validate(email, password)} />
                     </Box>
                  </Center>
               </FormControl>
            </ChakraProvider>
         </Card> 

   </Box>
           
   ) 
}

export default Home;