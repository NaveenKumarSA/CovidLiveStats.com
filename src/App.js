import { useState } from "react";
import { Button } from "@material-ui/core";
import "./assets/App.css";
import CovidChart from "./components/CovidChart";

function App() {
  const [covidChart, setCovidchart] = useState(false);
  return (
    <div className="App">
      {!covidChart && (
        <div className="covid_Image col-sm-12">
          <div className="covidImageButton">
            <span className="" onClick={() => setCovidchart(true)}>
              {" "}
              COVID REPORT TABLE LIVE
            </span>
          </div>
        </div>
      )}
      {covidChart && <CovidChart />}
    </div>
  );
}

export default App;
