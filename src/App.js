import useTotalCases from "./Apicalls/WorldTotalCases.js";
import useDeadByMonthSpain from "./Apicalls/DeadByDaySpain";
import './App.css';
import React, {Fragment} from 'react';
import {getSpainData} from './Apicalls'
import {useState, useEffect} from 'react';
import RadarCovid from "./componentes/radarchart";


const App = () => {
    const total = useTotalCases();
    const deadMonth = useDeadByMonthSpain();
    const [spainData, setSpainData] = useState(undefined);

    useEffect(() => {
        getSpainData().then(res => {
            setSpainData(res);
        })
    }, [])

    const totalCases = () => {
        const arrayLength = spainData.data.length;
        return spainData.data[arrayLength - 1].total_cases;

    }
    return (
        <Fragment>
            <div className="contenedor">
                <h1>
                    Covid DashBoard Elis, Gabriela y Facundo
                </h1>
            </div>
            <div className="casosactivos">
                <div className="world">
                    <h1>World Total Cases {total}</h1>
                </div>
                <div className="totalspain">
                    {spainData && <div><h1> Total Cases Spain {totalCases()} </h1></div>}

                </div>

            </div>
            <div className="spaindeads">
                <h1>LAST DAY DEADS SPAIN {deadMonth}</h1>
            </div>
            <div className="pobreza">
                <RadarCovid />
            </div>
        </Fragment>
    );
}

export default App;


