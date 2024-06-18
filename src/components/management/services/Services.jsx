import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import * as service from "../../../services/WorksCrudServices"
import ServicesTable from "../servicesTable/ServicesTable"

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        service.getAllServices((service) => {
            setServices(service)
        })
    }, [])



    return(
        <div className="container">
            <ul className="nav bar-pills">
                <li className="nav-item">
                    <Link className="nav-item btn btn-primary" to="/addservices">
                        Prideti nauja paslauga
                    </Link>
                </li>
            </ul>
            <h2>Paslaugos</h2>
            <ServicesTable data={services}/>
        </div>
    )
}

export default Services