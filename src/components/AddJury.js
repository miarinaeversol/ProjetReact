import React,{useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
const AddJury = () => {
const [im, setIm] = useState("");
const [nom, setNom] = useState("");
const [prenom, setPrenom] = useState("");
const [zap, setZap] = useState("Mahasoabe");
const [etab, setEtab] = useState("");
const [tel, setTel] = useState("");
const navigate = useNavigate();

const saveJury = async (e) => {
    e.preventDefault();
    try{
        await axios.post("http://localhost:5000/jurys",{
            im,
            nom,
            prenom,
            zap,
            etab,
            tel
        });
        navigate("/");
    }catch (error) {
        console.log(error);
    }
}

    return (
        <div className="column mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={saveJury}>

                    <div className="field">
                        <label className="label">Im</label>
                        <div className="control">
                            <input type="number" className="input" value={im} onChange={(e) => setIm(e.target.value)} placeholder="" maxLength={4}/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Nom</label>
                        <div className="control">
                            <input type="text" className="input" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="votre nom" maxLength={32}/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Prenom</label>
                        <div className="control">
                            <input type="text" className="input" value={prenom} onChange={(e) => setPrenom(e.target.value)} placeholder="votre prénom" maxLength={32}/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">ZAp</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select name="" id="" value={zap} onChange={(e) => setZap(e.target.value)}>
                                    <option value="Mahasoabe">Mahasoabe</option>
                                    <option value="Atalata Apano">Atalata Apano</option>
                                    <option value="Andranomiditra">Andranomiditra</option>
                                    <option value="Soaindrana">Soaindrana</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Etablissement</label>
                        <div className="control">
                            <input type="text" className="input" value={etab} onChange={(e) => setEtab(e.target.value)} placeholder="votre établissemennt" maxLength={20}/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Telépone</label>
                        <div className="control">
                            <input type="number" className="input" value={tel} onChange={(e) => setTel(e.target.value)} placeholder="" maxLength={10}/>
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

export default AddJury;