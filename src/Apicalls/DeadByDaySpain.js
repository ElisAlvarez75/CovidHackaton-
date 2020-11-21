import {useEffect, useState} from "react";

const URL = "http://localhost:3001/ESP";
const useDeadByMonthSpain = () => {
    const [deadMonth, setDeadMonth] = useState([]);

    useEffect(() => {

        fetch(URL)
            .then(resp => resp.json())
            .then((resp) => {
                const monthData = [];
                let sumMonth = 0;

                resp.data.forEach(day => {
                    new Date(day.date).getMonth()
                })


                setDeadMonth(resp.data[resp.data.length - 1].new_deaths);
                console.log(resp);
            }).catch((err) => {
            console.log('Unable to Fetch Data from API', err);
        });
    }, []);
    return deadMonth;
}

export default useDeadByMonthSpain;