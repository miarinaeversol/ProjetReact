import React,{useState, useEffect} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const EditExamen = () => {
const [code, setCode] = useState("");
const [nom, setNom] = useState("");
const [duree, setDuree] = useState("");
const navigate = useNavigate();
const {id} = useParams();

useEffect(() => {
    getExamenById();
}, []);

const updateExamen = async (e) => {
    e.preventDefault();
    try{
        await axios.patch(`http://localhost:5000/examens/${id}`,{
            code,
            nom,
            duree
        });
        navigate("/exam");
    }catch (error) {
        console.log(error);
    }
};

const getExamenById = async () => {
    const response = await axios.get(`http://localhost:5000/examens/${id}`);
    setCode(response.data.code);
    setNom(response.data.nom);
    setDuree(response.data.duree);
}



    return (
        <div className="column mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={updateExamen}>

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
                        <button type="submit" className='button is-success'>Edit</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default EditExamen;