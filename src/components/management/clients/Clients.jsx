import { Link } from "react-router-dom"
import ClientsTable from "../clientsTable/ClientsTable"
import { useEffect, useState } from "react"
import * as services from "../../../services/WorksCrudServices"

const Clients = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        services.getAllClients((clients) => {
            setClients(clients);
        })
    }, []);

    console.log('this coming from clients', clients)

    return(
        <div className="container">
            <ul className="nav bar-pills">
                <li className="nav-item">
                    <Link className="nav-item btn btn-primary" to="/addclient">
                        Prideti nauja klienta
                    </Link>
                </li>
            </ul>
            <h2>Klientai</h2>
            <ClientsTable data={clients}/>
        </div>
    )
}

export default Clients