import React, { useState, useEffect } from 'react';
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';
import data from '../data/covid-data.json';
const RadarCovid = () => {
    const [filterD, setFilterD] = useState();
    useEffect(() => {
        const filteredData = Object.keys(data).filter((countryKey) => {
            if (data[countryKey].continent === "Europe" && data[countryKey].extreme_poverty) {
                return true;
            }
            return false;
        }).map((countryKey) => {
            return {
                country: data[countryKey].location,
                poverty: data[countryKey].extreme_poverty
            }
        });
        setFilterD(filteredData);
    }, []);
    if (!filterD) {
        return <div />;
    }
    return (
        <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={filterD}>
            <PolarGrid />
            <PolarAngleAxis dataKey="country" />
            <PolarRadiusAxis />
            <Radar name="Mike" dataKey="poverty" stroke="#8884D8" fill="#8884D8" fillOpacity={0.6} />
        </RadarChart>
    );
};
export default RadarCovid;