import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const TravailleList = () => {
const [travailles, setTravaille] = useState([]);

useEffect(() =>{
    getTravailles();
}, []);

const getTravailles = async() =>{
    const response = await axios.get('http://localhost:5000/travailles');
    setTravaille(response.data);
}

const deleteTravaille = async (id) => {
    try{
        await axios.delete(`http://localhost:5000/travailles/${id}`);
        getTravailles();
    }catch (error){
        console.log(error);
    }
};

    return(
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <Link to={`/addtrav`} className="button is-success">Add Travaille</Link>
                <table className="table is-striped is-fullwidth">
                    <thead>
                        <tr>
                            <th>Im</th>
                            <th>Code</th>
                            <th>Debut</th>
                            <th>Fin</th>
                            <th>Session</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {travailles.map((travaille, index) => (
                            <tr key={travaille.id}>
                                <td>{travaille.im}</td>
                                <td>{travaille.code}</td>
                                <td>{travaille.date_db}</td>
                                <td>{travaille.date_fin}</td>
                                <td>{travaille.session}</td>
                                <td>
                                    <Link to={`/edittrav/${travaille.id}`} className="button is-small is-info">Edit</Link>
                                    <button onClick={()=> deleteTravaille(travaille.id)} className="button is-small is-danger">delete</button>
                                </td> 
                            </tr>
                        ))} 
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TravailleList;