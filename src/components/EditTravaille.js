import React,{useState, useEffect} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const EditTravaille = () => {
const [im, setIm] = useState("");
const [code, setCode] = useState("");
const [date_db, setDate_db] = useState("");
const [date_fin, setDate_fin] = useState("");
const [session, setSession] = useState("");
const navigate = useNavigate();
const {id} = useParams();

useEffect(() => {
    getTravailleById();
}, []);

const updateTravaille = async (e) => {
    e.preventDefault();
    try{
        await axios.patch(`http://localhost:5000/travailles/${id}`,{
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
};

const getTravailleById = async () => {
    const response = await axios.get(`http://localhost:5000/travailles/${id}`);
    setIm(response.data.im);
    setCode(response.data.code);
    setDate_db(response.data.date_db);
    setDate_fin(response.data.date_fin);
    setSession(response.data.session);
}



    return (
        <div className="column mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={updateTravaille}>

                    <div className="field">
                        <label className="label">Im</label>
                        <div className="control">
                            <input type="number" className="input" value={im} onChange={(e) => setIm(e.target.value)} placeholder="" maxLength={4}/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Code</label>
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
                            <input type="text" className="input" value={session} onChange={(e) => setSession(e.target.value)} placeholder="" maxLength={10}/>
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

export default EditTravaille;