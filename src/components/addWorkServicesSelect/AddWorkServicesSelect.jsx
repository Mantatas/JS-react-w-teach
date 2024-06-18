import { useEffect, useState } from "react";
import { getAllServices } from "../../services/WorksCrudServices"

const AddWorkServicesSelect = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        getAllServices((servicesData) => {
            setServices(servicesData);
        })
    }, [])

      return (
        <>
        <option value="">---Select a service---</option>
          {services.map((service) => (
            <option key={service.id} value={service.acronym}>
              {service.service}
            </option>
          ))}
        </>
      );
};

export default AddWorkServicesSelect