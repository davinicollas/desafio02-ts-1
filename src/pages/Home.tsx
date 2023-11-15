import { Box, Center, ChakraProvider, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { ButtonHellow } from "../components/Button/Button";
import { useContext, useState } from "react";
import { login } from "../services/login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { changeLocalStorage } from "../services/storage";

const  Home = () => {
   const [email, setEmail] = useState<string>("");
   const {setIsLoggedIn} = useContext(AppContext)
   const navigate = useNavigate()

   const validate = async (email:string)=>{
      const logged = await login(email)
      if(!logged){
        return alert('Email invalido ');
      }
         setIsLoggedIn(true)
         changeLocalStorage({login:true})
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
                     <Input size='sm' type='password' />
                     <ButtonHellow  event={()=>validate(email)} />
                     </Box>
                  </Center>
               </FormControl>
            </ChakraProvider>
         </Card> 

   </Box>
           
   ) 
}

export default Home;