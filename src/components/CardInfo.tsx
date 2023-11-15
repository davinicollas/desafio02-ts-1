import { Box,Text } from "@chakra-ui/react";
interface IcardInfo {
    mainContent: string,
    content: string
}

const CardInfo = ({ mainContent,content  }: IcardInfo) => {
    return (
        <Box minHeight='120px' padding={8} borderRadius={25} backgroundColor='orange'>
            <Text fontSize='2x1'fontWeight='bold'>{mainContent}</Text>
            <Text fontSize='x1'>{content}</Text>

        </Box>
    )

}

export default CardInfo;