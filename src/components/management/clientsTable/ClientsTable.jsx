import Client from "../client/Client"

const ClientsTable = (props) => {
    console.log('this coming from clientstable', props)
    return(
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>Klientas</th>
                    <th className="col-4">Kodas</th>
                    <th className="col-1">Keisti</th>
                    <th className="col-1">Salinti</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((clients) => (
                    <Client 
                    id={clients.id}
                    client={clients.client}
                    acronym={clients.acronym}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default ClientsTable