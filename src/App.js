import './App.css';
import React, { Fragment } from 'react';

const  App = () => {
  return (
    <Fragment>
    <div className="contenedor">
			<h1>
				Nuclio FullStack Development Hackaton 2: Covid Hackaton
			</h1>
    </div>
    <div className="casosactivos">
      <div className="world">
        <p>World Total cases</p>
      </div>
      <div className="totalspain">
        <h1>SPAIN</h1>
      </div>
    </div>
      <div className="spaindeads">
        <h1>SPAINDEADS</h1>
      </div>
      <div className="pobreza">
        <h1>POBREZA</h1>
      </div>
    </Fragment>
  );
}

export default App;
