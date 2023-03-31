import { useEffect, useState } from "react";
import { fetchOdds } from "../api/fetchOdds";
import "../stylesheets/App.scss";

function App() {
  const [odds, setOdds] = useState(null);

  useEffect(() => {
    const getOdds = async () => {
      const result = await fetchOdds("basketball_nba");

      if (result.success) {
        setOdds({ ...odds, basketball_nba: result.data });
      }

      if (result.error) {
        console.log("Things went wrong");
      }
    };
    getOdds();
  }, []);
  // using 1 bracket and no dependencies in order to only fetch once
  console.log(odds);
  return <div>Hello World</div>;
}

export default App;
