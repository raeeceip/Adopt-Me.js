import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import Pet from "./Pet";

const App = () => {
  return(
    <div>
        <h1>Adopt Me!</h1>
        <SearchParams></SearchParams>
    </div>
    );
};

render(<App/>, document.getElementById("root"));
