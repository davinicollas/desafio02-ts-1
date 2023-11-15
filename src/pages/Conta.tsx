import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import CardInfo from "../components/CardInfo";
import { useContext, useEffect, useState } from "react";
import { api } from "../api";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../components/AppContext";

interface UserData {
    email: string
    password: string
    name: string,
    saldo:  number,
    id: string
  }
  
const  Conta = () => {
    const [userData, setUserData] = useState<null | UserData>();
    const {id} =useParams()
    const navigate = useNavigate()

    const {isLoggedIn} = useContext(AppContext)


    !isLoggedIn && navigate("/")

    useEffect(() => {
      const getData = async () => {
        const data: any | UserData = await api
        setUserData(data)
      }
      getData()
    }, [])

    const actualDate = new Date();
    const dateFormat = `${actualDate?.getDate()} / ${actualDate?.getMonth()} / ${actualDate?.getFullYear()}   ${actualDate?.getHours()}: ${actualDate?.getMinutes()} `;
  

    if(userData && id !== userData.id){
      navigate('/')
    }
    return ( 
      <Center>
          <SimpleGrid columns={2} spacing={8} paddingTop={16}>
            {
              userData === undefined || userData === null ?
              (<Center>
                  <Spinner  color="black"/>
                </Center>):
                (   
                  <>
                  <CardInfo  mainContent={`Bem vindo ${userData?.name}`} content={`${dateFormat}`}/>
                  <CardInfo  mainContent={'Saldo'} content={`R$: ${userData.saldo}`}/>

                  </>
                )
            }
          </SimpleGrid>
      </Center>
   ) 
}

export default Conta;