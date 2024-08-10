import React,{useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
const AddTravaille = () => {
const [im, setIm] = useState("");
const [code, setCode] = useState("");
const [date_db, setDate_db] = useState("");
const [date_fin, setDate_fin] = useState("");
const [session, setSession] = useState("");
const navigate = useNavigate();

const saveTravaille = async (e) => {
    e.preventDefault();
    try{
        await axios.post("http://localhost:5000/travailles",{
            im,
            code,
            date_db,
            date_fin,
            session
        });
        navigate("/trav");
    }catch (error) {
        console.log(error);
    }
}

    return (
        <div className="column mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={saveTravaille} >

                    <div className="field">
                        <label className="label">Im</label>
                        <div className="control">
                            <input type="number" className="input" value={im} onChange={(e) => setIm(e.target.value)} placeholder="" maxLength={4}/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">code</label>
                        <div className="control">
                            <input type="text" className="input" value={code} onChange={(e) => setCode(e.target.value)} placeholder="" maxLength={32}/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Debut</label>
                        <div className="control">
                            <input type="date" className="input" value={date_db} onChange={(e) => setDate_db(e.target.value)} placeholder="" maxLength={32}/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Fin</label>
                        <div className="control">
                            <input type="date" className="input" value={date_fin} onChange={(e) => setDate_fin(e.target.value)} placeholder="" maxLength={32}/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Session</label>
                        <div className="control">
                            <input type="number" className="input" value={session} onChange={(e) => setSession(e.target.value)} placeholder="" maxLength={32}/>
                        </div>
                    </div>

                    <div className="field">
                        <button type="submit" className='button is-success'>Save</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default AddTravaille;