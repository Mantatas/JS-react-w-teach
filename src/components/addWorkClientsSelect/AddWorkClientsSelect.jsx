import { useEffect, useState } from "react";
import { getAllClients } from "../../services/WorksCrudServices"

const AddWorkClientsSelect = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        getAllClients((clientsData) => {
            setClients(clientsData);
        })
    }, [])

      return (
        <>
        <option value="">---Select a client---</option>
          {clients.map((client) => (
            <option key={client.id} value={client.acronym}>
              {client.client}
            </option>
          ))}
        </>
      );
};

export default AddWorkClientsSelect