import React,{useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const AddExamen = () => {
const [code, setCode] = useState("");
const [nom, setNom] = useState("");
const [duree, setDuree] = useState("");
const navigate = useNavigate();

const saveExamen = async (e) => {
    e.preventDefault();
    try{
        await axios.post("http://localhost:5000/examens",{
            code,
            nom,
            duree
        });
        navigate("/exam");
    }catch (error) {
        console.log(error);
    }
}



    return (
        <div className="column mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={saveExamen}>

                    <div className="field">
                        <label className="label">Code</label>
                        <div className="control">
                            <input type="text" className="input" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Code examen" maxLength={4}/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Nom</label>
                        <div className="control">
                            <input type="text" className="input" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Nom examen" maxLength={10}/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Durée</label>
                        <div className="control">
                            <input type="text" className="input" value={duree} onChange={(e) => setDuree(e.target.value)} placeholder="Durée examen" maxLength={10}/>
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

export default AddExamen;