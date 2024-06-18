import { useState, useEffect } from "react"
import * as service from "../../../services/WorksCrudServices"
import { useNavigate, useParams } from "react-router-dom"

const AddClients = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    const [formData, setFormData] = useState({
        client: "",
        acronym: ""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(id){
            service.updateClients(id, formData)
        } else{
            service.addClients({
                ...formData
            })
        }
        navigate("/clients")
    }

    useEffect(() => {
        id && service.getClientsById((item)=>setFormData(item), id)
    }, [id])

    return (
        <div className="card">
            <div className="card-header">
                <h2>Prideti klienta</h2>
            </div>
            <div className="card-body">
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="client">Klientas:</label>
                        <input
                        type="text"
                        name="client"
                        className="form-control"
                        onChange={handleChange}
                        value={formData.client} />
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
                        {(id)?
                        <button type="submit"className="btn btn-primary">Atnaujinti</button>:
                        <button type="submit"className="btn btn-primary">Prideti klienta</button>}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddClients