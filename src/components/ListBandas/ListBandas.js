import React from 'react';
import './ListBandas.css';
import ViewBand from '../ViewBand/ViewBand';

const { useEffect, useState } = require("react");

function ListBandas() {
    const [bands, setBands] = useState([]);
    const [antigua, setAntigua] = useState({});
    const [actual, setActual] = useState({});

    useEffect(() => {
        const URL = "https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json";
        fetch(URL).then(data => data.json()).then(data => {
            setBands(data);
            let anti = {};
            let difact = 0;
            data.forEach(bani => {
                if(2022 - bani.foundation_year > difact) {
                    anti = bani;
                    difact = 2022 - bani.foundation_year;
                }
            });
            setAntigua(anti);
        })
    }, []);

    const handleChange = (event) => {
        let n = event.target.value;
        bands.forEach(b => {
            if(b.name === n) {
                setActual(b);
            }
        });
    }

    return(
        <div className='container py-5'>
            <div className='row'>
                <div className='col-8'>
                    <table className='table'>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Pais</th>
                            <th>Genero</th>
                            <th>Fundacion</th>
                        </tr>
                        {bands !== undefined ? bands.map(ban => (
                            <tr>
                                <td>{ban.id}</td>
                                <td>
                                    <a className='b-name' value={ban.name} onClick={handleChange}>
                                        {ban.name}
                                    </a>
                                </td>
                                <td>{ban.country}</td>
                                <td>{ban.genre}</td>
                                <td>{ban.foundation_year}</td>
                            </tr>
                        )) : <h2>No hay internet ;c</h2>}
                    </table>
                    <p>La banda mas antigua es <strong>{antigua.name}</strong> que fue fundada hace <strong>{2022 - antigua.foundation_year}</strong> años.</p>
                </div>
                <div className='col-4'>
                    {actual !== undefined ? 
                        <ViewBand name={actual.name} /> :
                        <h2>Escoja una banda</h2>
                    }
                </div>
            </div>
        </div>
    );
}

export default ListBandas;