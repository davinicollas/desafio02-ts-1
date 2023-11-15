import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ContaInfo from "./pages/ContaInfo"
import Conta from "./pages/Conta"
import { useContext } from "react"
import { AppContext } from "./components/AppContext"

const MainRoutes = () =>{
    const {isLoggedIn} = useContext(AppContext)
    const {user} = useContext(AppContext)
    console.log(user)

    return (
        <Routes>
            <Route path='/' element={isLoggedIn ? <Conta /> : <Home />} />
            <Route path='/conta/:id' element={ isLoggedIn ?  <Conta /> :  <Home />} />
            <Route path='/info' element={ isLoggedIn && user ? <ContaInfo /> :  <Home />} />
        </Routes>
    )

}

export default MainRoutes