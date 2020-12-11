import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import Aos from "aos";
import "aos/dist/aos.css";
import "./assets/App.css";
import CovidChart from "./components/CovidChart";
import CovidDoughnut from "./components/CovidDoughnut";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  const [covidChart, setCovidchart] = useState(false);
  return (
    <div>
      <div className="App">
        {!covidChart && (
          <div>
            <div className="covid_Doughnut" style={{ paddingBottom: "14px" }}>
              <CovidDoughnut />
            </div>
            <div data-aos="fade-in" className="covid_Image col-sm-12">
              <div data-aos="fade-up" className="covidImageButton">
                <span className="" onClick={() => setCovidchart(true)}>
                  COVID REPORT TABLE LIVE
                </span>
              </div>
            </div>
          </div>
        )}
        {covidChart && <CovidChart />}
      </div>
      <Footer aos="zoom-up" />
    </div>
  );
}

export default App;
