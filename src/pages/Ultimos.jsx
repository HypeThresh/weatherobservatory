import React from "react";

export default function Ultimos({
  humedad,
  co,
  luz,
  suelo,
  lluvia,
  temperatura,
}) {
  const umbrales = 700;
  const changeIcon = (raining) => {
    if (raining) {
      return (<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-cloud-rain-fill display-0" viewBox="0 0 16 16">
        <path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm.247-6.998a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z" />
      </svg>)
    } else {
      return (<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-cloud-sun-fill display-0" viewBox="0 0 16 16">
        <path d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z" />
        <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
      </svg>)
    }
  }

  const textRain = (txtRain) => {
    if (txtRain) {
      return ("Esta lloviendo")
    } else {
      return ("No esta lloviendo")
    }
  }
  return (
    <div>
      <h1 className="text-center">Tiempo Real</h1>
      <div className="row d-flex justify-content-around p-2">
        <div className="card border-danger shadow-sm col-12 col-md-3 mx-1 mt-3">
          <h3 className="card-header text-center">Temperatura</h3>
          <div className="card-title text-center display-1">
          {temperatura && temperatura}°<div className="fs-4 text"> °C</div>
          </div>
        </div>{" "}
        <div className="card border-scondary shadow-sm col-12 col-md-3 mx-1 mt-3">
          <h3 className=" card-header text-center">CO2</h3>
          <div className="card-title text-center display-1">
          {co && co} <div className="fs-4 text">ppm</div>
          </div>
        </div>{" "}
        <div className="card border-info shadow-sm col-12 col-md-3 mx-1 mt-3">
          <h3 className="card-header text-center">Humedad</h3>
          <div className="card-title text-center display-1">
          {humedad && humedad}% <div className="fs-4 text">Humedad del Aire</div>
          </div>
        </div>{" "}
        <div className="card border-primary shadow-sm col-12 col-md-3 mx-1 mt-3">
          <h3 className="card-header text-center">Lluvia</h3>
          <div className="card-title text-center display-1">
          {lluvia && changeIcon(lluvia < umbrales)}<div className="fs-4 text">{lluvia && textRain(lluvia < umbrales) }</div>
          </div>
        </div>{" "}
        <div className="card border-success shadow-sm col-12 col-md-3 mx-1 mt-3">
          <h3 className="card-header text-center">Suelo</h3>
          <div className="card-title text-center display-1">
            {suelo && suelo} %<div className="fs-4 text">Nivel de Humedad</div>
          </div>
        </div>{" "}
        <div className="card border-warning shadow-sm col-12 col-md-3 mx-1 mt-3">
          <h3 className="card-header text-center">Luz</h3>
          <div className="card-title text-center display-1">
          {luz && luz} %< div className="fs-4 text">(1/10 luxes)</div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
