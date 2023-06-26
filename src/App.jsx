import { useState, useEffect } from "react";
import { getDatabase, ref, set, onValue } from "firebase/database";
import moment from "moment/moment";

import { app } from "./firebase/config";
import Graficos from "./pages/Graficos";
import Ultimos from "./pages/Ultimos";
import Table from "./pages/Table";

export default function App() {
  const [date, setDate] = useState(moment().format("DD-MM-YYYY"));
  const [hora, setHora] = useState(moment().format("HH:mm"));
  const [data, setData] = useState([]);
  const [view, setView] = useState("tabla");

  const db = getDatabase(app);

  const getData = () => {
    onValue(ref(db, "Sensores/" + date), (snapshot) => {
      const object = snapshot.val();
      if (!object) return;
      const keys = Object.keys(object);

      //data mapeada con fecha y hora obtenidad del id del objeto
      const newData = keys.map((h) => {
        return {
          ...object[h],
          fecha: h + " " + date,
        };
      });
      setData(newData.reverse());
    });
  };
  useEffect(() => {
    getData();
  }, [date, hora]);

  const renderView = () => {
    switch (view) {
      case "tabla":
        return <Table data={data} />;
      case "graficos":
        if (!data.length)
          return <div className="col-12 text-center mt-2">No hay datos</div>;
        return <Graficos data={data} />;
      case "ultimos":
        if (!data.length)
          return <div className="col-12 text-center mt-2">No hay datos</div>;
        return (
          <Ultimos
            humedad={data[0].humedad}
            temperatura={data[0].temperatura}
            luz={data[0].luz}
            lluvia={data[0].lluvia}
            suelo={data[0].suelo}
            co={data[0].co}
          />
        );
      default:
        return <Table data={data} />;
    }
  };

  return (
    <div className="container">
      <div className="row mt-4 border p-3 justify-content-center">
        <button
          className="btn border-dark shadow-sm btn-white border col-12 col-md-3 mx-1 mb-1 "
          onClick={() => setView("ultimos")}
        >
          Actual
        </button>
        <button
          className="btn border-dark shadow-sm btn-white border col-12 col-md-3 mx-1 mb-1"
          onClick={() => setView("tabla")}
        >
          Registros
        </button>

        <button
          className="btn border-dark shadow-sm btn-white border col-12 col-md-3 mx-1 mb-1"
          onClick={() => setView("graficos")}
        >
          Graficos
        </button>

      </div>
      <div className="row mt-4 border py-4">
        <div className="input-group justify-content-center">
          <div className="col-12 col-md-2 my-1">
            <input
              type="date"
              className="form-control"
              value={moment(date, "DD-MM-YYYY").format("YYYY-MM-DD")}
              onChange={(e) =>
                setDate(moment(e.target.value).format("DD-MM-YYYY"))
              }
            />
          </div>
          <div className="col-12 col-md-2 my-1 ">
            <input
              type="time"
              value={hora}
              className="form-control"
              onChange={(e) => setHora(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="row">{renderView()}</div>
    </div>
  );
}
