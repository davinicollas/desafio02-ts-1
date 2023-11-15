import { Box,  Button,  Center, Flex, Heading, Spacer } from '@chakra-ui/react'
import './Header.css'
import { useContext } from 'react'

import { AppContext } from "../AppContext"
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../../services/storage'
import { api } from '../../api'


export const Header = () => {

  const { setIsLoggedIn , isLoggedIn} = useContext(AppContext)
  const navigate = useNavigate()
  const logout = async () => {
    const data: any = await api

    changeLocalStorage({login:false, user: data })
    setIsLoggedIn(false)

    navigate('/')
  }
  return (
    <Flex>
        <Box backgroundColor="#000" color="white" padding="5px"  top="0" width="100%">
          <Center>
            <Heading >Dio Pro</Heading>
          </Center>
        </Box>
        { isLoggedIn && (
          <>
            <Spacer/>
            <Button onClick={()=>logout()}>
              Sair
            </Button>
          </>
        )}
          
    </Flex>
   

  )
}
