import Header from "../header/Header"
import Works from "../works/Works"
import AddWork from "../addWork/AddWork"
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "../user/login/Login"
import Register from "../user/register/Register"
import Reset from "../user/reset/Reset"

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
                </Routes>
            </Router>
        </>
    );
}
export default App