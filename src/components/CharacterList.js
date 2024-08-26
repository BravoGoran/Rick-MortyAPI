import React, { useEffect, useState } from "react";
import { Card, Grid, Image, Button } from "semantic-ui-react";
import "../App.css";

function CharacterList({ onShowDetails }) {
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const getAllCharaters = async () => {
      const url = "https://rickandmortyapi.com/api/character";

      try {
        const response = await fetch(url);
        const data = await response.json();
        setPersonajes(data.results);
        setCargando(false);
      } catch (error) {
        console.error(error);
        setCargando(false);
      }
    };

    getAllCharaters();
  }, []);

  if (cargando) {
    return <p>Cargando...</p>;
  }

  return (
    <Grid stackable>
      <Grid.Row>
        {personajes.map((personaje) => (
          <Grid.Column computer={4} tablet={8} mobile={16} key={personaje.id}>
            <Card>
              <Image src={personaje.image} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{personaje.name}</Card.Header>
                <Card.Meta>{personaje.gender}</Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button
                    basic
                    color="black"
                    onClick={() => onShowDetails(personaje)}
                  >
                    Detalles
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  );
}

export default CharacterList;
