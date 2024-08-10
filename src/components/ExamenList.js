import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const ExamenList = () => {
const [examens, setExamen] = useState([]);

useEffect(() =>{
    getExamens();
}, []);

const getExamens = async() =>{
    const response = await axios.get('http://localhost:5000/examens');
    setExamen(response.data);
}

const deleteExamen = async (id) => {
    try{
        await axios.delete(`http://localhost:5000/examens/${id}`);
        getExamens();
    }catch (error){
        console.log(error);
    }
};

    return(
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <Link to={`/addexam`} className="button is-success">Add New</Link>
                <table className="table is-striped is-fullwidth">
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Nom</th>
                            <th>Durée</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {examens.map((examen, index) => (
                            <tr key={examen.id}>
                                <td>{examen.code}</td>
                                <td>{examen.nom}</td>
                                <td>{examen.duree}</td>
                                <td>
                                    <Link to={`/editexam/${examen.id}`} className="button is-small is-info">Edit</Link>
                                    <button onClick={()=> deleteExamen(examen.id)} className="button is-small is-danger">delete</button>
                                </td> 
                            </tr>
                        ))} 
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ExamenList;