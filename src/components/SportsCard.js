import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export function SportsCard(props) {
  const { sportsGame } = props;
  return (
    <Card>
      <Card.Body>
        <Row>
          <Card.Subtitle className="mb-2 text-muted">Game Data:</Card.Subtitle>
          <Card.Text>
            {sportsGame.teams[0]}: {sportsGame.sites[0].odds.h2h[0]}
          </Card.Text>{" "}
          <Card.Text>Draw: {sportsGame.sites[0].odds.h2h[2]}</Card.Text>
          <Card.Text>
            {sportsGame.teams[1]}: {sportsGame.sites[0].odds.h2h[1]}
          </Card.Text>
          <Card.Text>{sportsGame.teams[0]}</Card.Text>
        </Row>
      </Card.Body>
    </Card>
  );
}
