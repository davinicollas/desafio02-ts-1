import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ContaInfo = () => {
    return (
        <>
            <Text fontSize='2x1' fontWeight='bold' padding={90}>                    
                Informacoes da conta
            </Text>
            <Link to='/conta/1'><Text fontSize='x1'>
                Conta
            </Text></Link>
        </>
    )
}

export default ContaInfo;