import { useState } from "react"
import { sendPasswordReset } from "../../../services/AuthServices"

const Reset = () => {
    const [email, setEmail] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        sendPasswordReset(email);
    }
    return(
        <div className="container">
            <h2 className="mt-3 text-center">Atstatykite slaptazodi</h2>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="El. pastas" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                </div>
                <div className="form-group">
                    <button className="mt-2 btn btn-primary" type="submit">Siusti</button>
                </div>
            </form>
        </div>
    )
}

export default Reset