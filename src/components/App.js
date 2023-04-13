import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Listgroup from "react-bootstrap/Listgroup";
import { fetchOdds } from "../api/fetchOdds";
import { sportList } from "../constant";
import { SportsCard } from "./SportsCard";
import "../stylesheets/App.scss";
import { ListGroupItem } from "react-bootstrap";

function App() {
  const [odds, setOdds] = useState(null);
  const [activeSport, setActiveSport] = useState(basketball_nba)
//
  useEffect(() => {
    const getOdds = async () => {
      const result = await fetchOdds("basketball_nba");

      if (result.success) {
        setOdds({...odds, basketball_nba: result.data});
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

  console.log(odds, '::odds')
  return (
    <>
    <Container>
      <Row>
        <Col xs={12} md={2}>
          <Listgroup>
            {sportList.map(sport => {
              return (
                <ListGroup.Item
                  key={sport.key}
                  as='button'
                  onCLick={() => setActiveSport(sport.key)}
                  active={activeSport === sport.key}
                >
                  {sport.view}
                </ListGroup.Item>
              )
            })}
          </Listgroup>
        </Col>
        <Col xs={12} md={10}>
          <Row>
            {odds[activeSport] ? (
              odds[activeSport].map(sportsGame => {
                return (
                  <Col 
                  >
                  </Col>
                )
              })
            )}
          </Row>
          <Listgroup>
            {sportList.map(sport => {
              return (
                <ListGroup.Item
                  key={sport.key}
                  as='button'
                  onCLick={() => setActiveSport(sport.key)}
                  active={activeSport === sport.key}
                >
                  {sport.view}
                </ListGroup.Item>
              )
            })}
          </Listgroup>
        </Col>
      </Row>
    </Container>
    </>
  )
  
  // Review from here
  const deriveOutcomes = (game) => {
    const draftkings = game.bookmakers.find((book) => {
      return book.key === "draftkings";
    });

    const marketOdds = (draftkings?.markets || []).find((market) => {
      return market.key === "spreads";
    });

    return marketOdds.outcomes || [];

    // return an array of outcomes
  };

  /**
   * bookmakers => find draftkings
   * look at markets => find spread => outcomes
   */

  return (
    <div>
  <ul>
    {odds.map((game) => {
      const [game1, game2] = deriveOutcomes(game);

      return (
        <ul>
    <Container>
      <Row>
        <Col xs={12} md={2}>
        <listgroup>
          {
            sportList.map((sport) => {
              return (
                <Listgroup.Item key={sport.key} as="button"
                onCLick ={() =>}
                >

                </Listgroup.Item>
              )
            })
          }
        </listgroup>

        <SportsCard>
          
        </SportsCard>
        </Col>

        <Col xs={12} md={10}>
        </Col>

      </Row>
    </Container>
  <ul/>
  <ul>
        <li key={game.id}>
          {game1.name} sa- {game2.name}{" "}
        </li>
      );
    )
  </ul>
  </ul>
  </ul>
  </div>
);
}

export default App;
