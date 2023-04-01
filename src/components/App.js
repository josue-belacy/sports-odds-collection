import { useEffect, useState } from "react";
import { fetchOdds } from "../api/fetchOdds";
import "../stylesheets/App.scss";

function App() {
  const [odds, setOdds] = useState(null);

  useEffect(() => {
    const getOdds = async () => {
      const result = await fetchOdds("basketball_nba");

      if (result.success) {
        setOdds((prevOdds) => ({ ...prevOdds, basketball_nba: result.data }));
      }

      if (result.error) {
        console.log("Things went wrong");
      }
    };

    getOdds();
  }, []);

  if (!odds) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {odds["basketball_nba"].map((game, index) => (
        <li key={index}>
          {game.teams[0]} - {game.teams[1]}
        </li>
      ))}
    </ul>
  );
}

export default App;
