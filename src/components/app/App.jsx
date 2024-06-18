import Header from "../header/Header"
import Works from "../works/Works"
import AddWork from "../addWork/AddWork"
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "../user/login/Login"
import Register from "../user/register/Register"
import Reset from "../user/reset/Reset"
import AddClients from "../management/addClients/AddClients"
import AddServices from "../management/addServices/AddServices"
import Clients from "../management/clients/Clients"
import Services from "../management/services/Services"

const App = () => {
    return(
        <>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Works/>}/>
                    <Route path="/add-work" element={<AddWork/>}/>
                    <Route path="/update/:id" element={<AddWork/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/reset" element={<Reset/>}/>
                    <Route path="/addclient" element={<AddClients/>}/>
                    <Route path="/addservices" element={<AddServices/>}/>
                    <Route path="/clients" element={<Clients/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/clients/update/:id" element={<AddClients/>}/>
                    <Route path="/services/update/:id" element={<AddServices/>}/>
                </Routes>
            </Router>
        </>
    );
}
export default App