import React, { Component } from "react";
import "../assets/App.css";
import Bar from "chart.js";
import axios from "axios";
import { ProgressBar } from "react-bootstrap";
import { CircularProgress, LinearProgress } from "@material-ui/core";
import { CenterFocusStrong } from "@material-ui/icons";
import CountUp from "react-countup";

class CovidChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        method: "GET",
        url: "https://covid-193.p.rapidapi.com/statistics",
        headers: {
          "x-rapidapi-key":
            "f69831cf66msh57352fc0ead37e3p1b0910jsn8fbce139b0b7",
          "x-rapidapi-host": "covid-193.p.rapidapi.com",
        },
      },
      covidReports: [],
      loading: true,
      classes: {
        loadingDiv: {
          marginTop: "50px",
        },
      },
    };
  }

  async componentDidMount() {
    setTimeout(() => {
      axios
        .request(this.state.options)
        .then((response) => {
          console.log(response.data.response);
          setInterval(() => {
            this.setState({
              covidReports: response.data.response,
              loading: false,
            });
          }, 2000);
        })

        .catch(function (error) {
          console.log(error);
        });
    }, 500);
  }
  render() {
    const { covidReports, loading, classes } = this.state;
    return (
      <div>
        {/*   <div>{console.log(covidReports[0].country)}</div> */}
        <h2 style={{ fontWeight: "2vh" }}>
          Covid Report of {<CountUp start={0} end={269} duration={15} />}{" "}
          Countries
        </h2>
        {/* I am writing a Condition here to check the api call is executed, 
        if "no" i will render some loading animations  
        if "yes" i will render the table to render the table of data */}
        {loading ? (
          /* If the page is loading the below div will show the progress bar animation  */
          <div className={classes.loadingDiv}>
            <CircularProgress />
            <h3>Loading...</h3>
          </div>
        ) : (
          <div className="fadeInAnimation" style={{ alignItems: "center" }}>
            <table className="table table-striped table-responsive  covidReportTable ">
              <thead className="">
                <tr>
                  {/*   <td>
                    <b>CONTINENT</b>
                  </td> */}
                  <td>
                    <b>COUNTRY</b>
                  </td>
                  <td>
                    <b>POPULATION</b>
                  </td>
                  <td>
                    <b>NEW</b>
                  </td>
                  <td>
                    <b>ACTIVE</b>
                  </td>
                  <td>
                    <b>CRITICAL</b>
                  </td>
                  <td>
                    <b>RECOVERED</b>
                  </td>
                  <td>
                    <b>DEATHS</b>
                  </td>
                  <td>
                    <b>TOTAL</b>
                  </td>
                  <td>
                    <b>TESTS</b>
                  </td>
                  <td>
                    <b>LAST UPDATE</b>
                  </td>
                </tr>
              </thead>
              <tbody>
                {covidReports.map((covidReport) => (
                  <tr key={covidReport.country} scope="row">
                    {/* <td>
                      <p>
                        {covidReport.continent === null
                          ? "NA"
                          : covidReport.continent}
                      </p>
                    </td> */}
                    <td>
                      <p>
                        {covidReport.country === null
                          ? "NA"
                          : covidReport.country}
                      </p>
                    </td>
                    <td>
                      <p>
                        {covidReport.population === null ? (
                          <p>NA</p>
                        ) : (
                          covidReport.population
                        )}
                      </p>
                    </td>
                    <td>
                      <p>
                        {covidReport.cases.new === null ? (
                          <p style={{ color: "#f6e" }}>NA</p>
                        ) : (
                          <CountUp end={covidReport.cases.new} duration={5} />
                        )}
                      </p>
                    </td>
                    <td>
                      <p>
                        {covidReport.cases.active === null ? (
                          <p style={{ color: "#f6e" }}>NA</p>
                        ) : (
                          <CountUp
                            end={covidReport.cases.active}
                            duration={7}
                          />
                        )}
                      </p>
                    </td>
                    <td>
                      <p>
                        {covidReport.cases.critical === null ? (
                          <p style={{ color: "#f6e" }}>NA</p>
                        ) : (
                          <CountUp
                            end={covidReport.cases.critical}
                            duration={6}
                          />
                        )}
                      </p>
                    </td>
                    <td>
                      <p>
                        {covidReport.cases.recovered === null ? (
                          <p style={{ color: "#f6e" }}>NA</p>
                        ) : (
                          <CountUp
                            end={covidReport.cases.recovered}
                            duration={8}
                          />
                        )}
                      </p>
                    </td>
                    <td>
                      <p>
                        {covidReport.deaths.new === null ? (
                          <p style={{ color: "#f6e" }}>NA</p>
                        ) : (
                          <CountUp end={covidReport.deaths.new} duration={7} />
                        )}
                      </p>
                    </td>
                    <td>
                      <p>
                        {covidReport.deaths.total === null ? (
                          <p style={{ color: "#f6e" }}>NA</p>
                        ) : (
                          <CountUp
                            end={covidReport.deaths.total}
                            duration={5}
                          />
                        )}
                      </p>
                    </td>
                    <td>
                      <p>
                        {covidReport.tests.total === null ? (
                          <p style={{ color: "#f6e" }}>NA</p>
                        ) : (
                          <CountUp end={covidReport.tests.total} duration={5} />
                        )}
                      </p>
                    </td>
                    <td>
                      <p>
                        {covidReport.time === null ? (
                          <p style={{ color: "#f6e" }}>NA</p>
                        ) : (
                          covidReport.time
                        )}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
              
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default CovidChart;
