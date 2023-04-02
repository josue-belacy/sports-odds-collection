import { useEffect, useState } from "react";
import { fetchOdds } from "../api/fetchOdds";
import "../stylesheets/App.scss";

function App() {
  const [odds, setOdds] = useState([]);

  useEffect(() => {
    const getOdds = async () => {
      const result = await fetchOdds("basketball_nba");

      console.log(result);

      if (result.success) {
        setOdds(result.data);
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

  console.log({ odds });

  const deriveOutcomes = (game) => {
    const draftkings = game.bookmakers.find((book) => {
      return book.key === "draftkings";
    });

    const marketOdds = (draftkings?.markets || []).find((market) => {
      return market.key === "spreads";
    });

    return marketOdds.outcomes || [];

    // return an array of outcomse
  };

  /**
   * bookmakers => find draftkings
   * look at markets => find spread => outcomes
   */

  return (
    <ul>
      {odds.map((game) => {
        const [game1, game2] = deriveOutcomes(game);

        return (
          <li key={game.id}>
            {game1.name} {game1.price} -- {game2.name} {game2.price}
          </li>
        );
      })}
    </ul>
  );
}

export default App;
