import { useEffect } from "react";
import { fetchOdds } from "../api/fetchOdds";
import "../stylesheets/App.scss";

function App() {
  useEffect(() => {
    fetchOdds("basketball_nba");
  }, []);
  // using 1 bracket and no dependencies in order to only fetch once
  return <div>Hello World</div>;
}

export default App;
