import { useState, useEffect } from "react"
import * as service from "../../../services/WorksCrudServices"
import { useNavigate, useParams } from "react-router-dom"

const AddServices = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    const [formData, setFormData] = useState({
        service: "",
        acronym: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(id){
            service.updateServices(id, formData);
        } else{
            service.addServices({
                ...formData
        })
    }
        navigate("/services")
    }

    useEffect(() => {
        id && service.getServicesById((item)=>setFormData(item), id)
    }, [id])

    return (
        <div className="card">
            <div className="card-header">
                <h2>Prideti paslauga</h2>
            </div>
            <div className="card-body">
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="service">Paslauga:</label>
                        <input
                        type="text"
                        name="service"
                        className="form-control"
                        onChange={handleChange}
                        value={formData.service} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="acronym">Kodas:</label>
                        <input 
                        type="text" 
                        name="acronym"
                        className="form-control"
                        onChange={handleChange}
                        value={formData.acronym} />
                    </div>
                    <div className="mb-3">
                        <button type="submit"className="btn btn-primary">Prideti paslauga</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddServices