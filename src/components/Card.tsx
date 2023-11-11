import { Box, Center, FormControl,  FormLabel, Input, ChakraProvider} from "@chakra-ui/react"
import { login } from "../services/login"
import { ButtonHellow } from "./Button/Button"
import { Header } from "./Header/Header"
import { Footer } from "./Footer/Footer"
import { useState } from "react"



export const Card = () => {
  const [forname, setFormName] = useState("");
  return (
    <div>
      <ChakraProvider>
      <Header />
      <FormControl padding={90}>
        <Center>
          <Box mt='2' w='55%' alignItems='center' >
            <FormLabel>Name</FormLabel>
            <Input  size='sm' type='text' 
                onChange={(e) => setFormName(e.target.value)} />
            <FormLabel>Passoword</FormLabel>
            <Input  size='sm' type='password' />
            <ButtonHellow descricao={'Login'} forname={forname} event={login}/>
          </Box>
        </Center>
      </FormControl>
      <Footer/>
      </ChakraProvider>


    </div>

  )
}