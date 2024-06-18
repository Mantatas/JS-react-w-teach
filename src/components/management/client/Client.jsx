import * as service from "../../../services/WorksCrudServices"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Client = (props) => {
    const navigate = useNavigate();

    const deleteHandler = () => {
        service.deleteClients(props.id);
        navigate('/clients');
    }

    return(
        <tr>
            <td>{props.client}</td>
            <td>{props.acronym}</td>
            <td><Link className="btn btn-warning" to={`/clients/update/${props.id}`}>Keisti</Link></td>
            <td><button type="click" className="btn btn-danger" onClick={deleteHandler}>Salinti</button></td>
        </tr>
    )
}

export default Client