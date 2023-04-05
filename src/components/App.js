import { useEffect, useState } from "react";
import { Container } from "react-bootstrap/Container";
import { Row } from "react-bootstrap/Row";
import { Col } from "react-bootstrap/Col";
import { Listgroup } from "react-bootstrap/Listgroup";
import { fetchOdds } from "../api/fetchOdds";
import { sportList } from "../constant";

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
          <>
      <Container>
        <Row>
          <Col xs={12} md={2}>

          </Col>

          <Col xs={12} md={10}>
          </Col>

        </Row>
      </Container>
    </>
          <li key={game.id}>
            {game1.name} sa- {game2.name}{" "}
          </li>
        );
      })}
    </ul>
  );
}

export default App;
