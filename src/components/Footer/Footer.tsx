import { Box, Center, Container,Text} from "@chakra-ui/react"

export const Footer  = () => {
  return(
      <Box  backgroundColor="#000" color="white" padding="4"  position="fixed" bottom="0" width="100%">
        <Container maxW="container.xl">
          <Box>
            <Center>
              <Text>© 2023 desafio 2</Text>
            </Center>
          </Box>
        </Container>
      </Box>
  )
}
