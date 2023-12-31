import { useEffect, useState } from "react";
import { VictoryLine, VictoryChart } from "victory";

export default function Graficos({ data }) {
  const [co, setCo] = useState([]);
  const [humedad, setHumedad] = useState([]);
  const [luz, setLuz] = useState([]);
  const [lluvia, setLluvia] = useState([]);
  const [temperatura, setTemperatura] = useState([]);
  const [suelo, setSuelo] = useState([]);

  useEffect(() => {
    data = data.slice(0, 5);

    setCo(data.map((d) => ({ x: d.fecha?.split(" ")[0], y: d.co })).reverse());
    setHumedad(
      data.map((d) => ({ x: d.fecha?.split(" ")[0], y: d.humedad })).reverse()
    );
    setLuz(
      data.map((d) => ({ x: d.fecha?.split(" ")[0], y: d.luz })).reverse()
    );
    setLluvia(
      data.map((d) => ({ x: d.fecha?.split(" ")[0], y: d.lluvia })).reverse()
    );
    setTemperatura(
      data
        .map((d) => ({ x: d.fecha?.split(" ")[0], y: d.temperatura }))
        .reverse()
    );
    setSuelo(
      data.map((d) => ({ x: d.fecha?.split(" ")[0], y: d.suelo })).reverse()
    );
  }, [data]);

  return (
    <div className="row">
      <div className="col-12 col-md-4 mt-3">
        <h3 className="text-center">Temperatura</h3>
        {temperatura.length > 0 && (
          <VictoryChart>
            <VictoryLine style={{
              data: { stroke: "#F97B22" }
            }}data={temperatura} />
          </VictoryChart>
        )}
            </div>
      <div className="col-12 col-md-4 mt-3">
        <h3 className="text-center">CO2</h3>
        {co.length > 0 && (
          <VictoryChart >
            <VictoryLine style={{
              data: { stroke: "#73A9AD" }
            }}data={co} />
          </VictoryChart>
        )}
      </div>{" "}
      <div className="col-12 col-md-4 mt-3">
        <h3 className="text-center">Lluvia</h3>
        {lluvia.length > 0 && (
          <VictoryChart>
            <VictoryLine style={{
              data: { stroke: "#213363" }
              }}data={lluvia} />
          </VictoryChart>
        )}
      </div>{" "}
      <div className="col-12 col-md-4 mt-3">
        <h3 className="text-center">Humedad</h3>
        {humedad.length > 0 && (
          <VictoryChart>
            <VictoryLine style={{
              data: { stroke: "#79E0EE" }
              }}data={humedad} />
          </VictoryChart>
        )}
      </div>{" "}
      <div className="col-12 col-md-4 mt-3">
        <h3 className="text-center">Suelo</h3>
        {suelo.length > 0 && (
          <VictoryChart>
           <VictoryLine style={{
              data: { stroke: "#61481C" }
              }}data={suelo} />
          </VictoryChart>
        )}
      </div>{" "}
      <div className="col-12 col-md-4 mt-3">
        <h3 className="text-center">Luz</h3>
        {luz.length > 0 && (
          <VictoryChart>
            <VictoryLine style={{
              data: { stroke: "#E7B10A" }
              }}data={luz} />
          </VictoryChart>
        )}
      </div>{" "}
    </div>
  );
}
