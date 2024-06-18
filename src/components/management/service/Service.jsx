import * as service from "../../../services/WorksCrudServices"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Service = (props) => {
    const navigate = useNavigate();

    const deleteHandler = () => {
        service.deleteServices(props.id);
        navigate('/services');
    }
    return(
        <tr>
            <td>{props.service}</td>
            <td>{props.acronym}</td>
            <td><Link className="btn btn-warning" to={`/services/update/${props.id}`}>Keisti</Link></td>
            <td><button type="click" className="btn btn-danger" onClick={deleteHandler}>Salinti</button></td>

        </tr>
    )
}

export default Service