import {useEffect, useState} from "react";

const URL = "http://localhost:3001/OWID_WRL";
const useTotalCases = () => {
    const [worldData, setWorldData] = useState([]);

        useEffect(() => {

            fetch(URL)
                .then(resp => resp.json())
                .then((resp) => {
                    setWorldData(resp.data[resp.data.length - 1].total_cases);
                    console.log(resp);
                }).catch((err) => {
                console.log('Unable to Fetch Data from API', err);
            });
        }, []);
        return worldData;
}

export default useTotalCases;