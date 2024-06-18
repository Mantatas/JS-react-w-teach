import Service from "../service/Service"

const ServicesTable = (props) => {
    console.log('this come from servicestable', props)
    return(
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>Paslauga</th>
                    <th className="col-4">Kodas</th>
                    <th className="col-1">Keisti</th>
                    <th className="col-1">Salinti</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((services) => (
                    <Service
                    id={services.id}
                    service={services.service}
                    acronym={services.acronym}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default ServicesTable