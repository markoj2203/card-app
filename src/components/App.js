import React from "react";
import CardData from "./CardData";

function App() {
  return (
    <div>
      <div className="container" style={{ paddingTop: "5%" }}>
        <div className="row">
          <div className="col"></div>
          <div className="col-8">
            <CardData />
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
