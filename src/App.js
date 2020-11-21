import useTotalCases from "./Apicalls/WorldTotalCases.js";
import useDeadByMonthSpain from "./Apicalls/DeadByDaySpain";

const  App = () => {
    const total = useTotalCases();
    const deadMonth = useDeadByMonthSpain();
  return (
    <div>
			<h1 style={{textAlign: "center"}}>
				Nuclio FullStack Development Hackaton 2
			</h1>
        <p>World Total Cases {total}</p>
        <p>Total Muertos Ultimo Dia {deadMonth}</p>
    </div>
  );
}

export default App;
