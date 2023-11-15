import { Box,  Center, Heading, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../components/AppContext";


const ContaInfo = () => {
    const {user} = useContext(AppContext)
    return (
        <Center height='50vh'>
            <Box width='600px'  boxShadow='lg' borderRadius='md'>
                <Heading mb='4'>Informacoes pessoais</Heading>
                <Box mb='4'>
                    <Text mb='2'>Nome: {user?.name}</Text>
                </Box>
                <Box mb='4'>
                    <Text mb='2'>E-mail: {user?.email}</Text>
                </Box>
                <Link to='/conta/1'><Text fontSize='x1'>
                        Conta
                    </Text></Link>
            </Box>
        </Center>
    )
}

export default ContaInfo;