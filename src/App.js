import {getSpainData} from './Apicalls'
import {useState, useEffect} from 'react';

const  App = () => {

  const [spainData, setSpainData] = useState(undefined);

  
  useEffect(() => {
    getSpainData().then(res => {
      setSpainData(res);
    })
  }, [])

const totalCases = () => {
  const arrayLength = spainData.data.length;
  return spainData.data[arrayLength-1].total_cases;
}


  return (
    <div>
			<h1 style={{textAlign: "center"}}>
				Nuclio FullStack Development Hackaton 2
			</h1>
      {spainData && <div>{spainData.location}</div>}
      {spainData && <div> <h2> Total Cases {totalCases()} </h2> </div>}
      
    </div>
  );
}

export default App;


