import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const JuryList = () => {
const [jurys, setJury] = useState([]);

useEffect(() =>{
    getJurys();
}, []);

const getJurys = async() =>{
    const response = await axios.get('http://localhost:5000/jurys');
    setJury(response.data);
}

const deleteJury = async (id) => {
    try{
        await axios.delete(`http://localhost:5000/jurys/${id}`);
        getJurys();
    }catch (error){
        console.log(error);
    }
};

    return(
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <Link to={`add`} className="button is-success">Add New</Link>
                <table className="table is-striped is-fullwidth"  style={{width:"800px"}}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Im</th>
                            <th>Nom</th>
                            <th>Prenom</th>
                            <th>Zap</th>
                            <th>Etablissement</th>
                            <th>Télephone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jurys.map((jury, index) => (
                            <tr key={jury.id}>
                                <td>{index + 1}</td>
                                <td>{jury.im}</td>
                                <td>{jury.nom}</td>
                                <td>{jury.prenom}</td>
                                <td>{jury.zap}</td>
                                <td>{jury.etab}</td>
                                <td>{jury.tel}</td>
                                <td>
                                    <Link to={`edit/${jury.id}`} className="button is-small is-info">Edit</Link>
                                    <button onClick={()=> deleteJury(jury.id)} className="button is-small is-danger">delete</button>
                                </td> 
                            </tr>
                        ))} 
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JuryList;