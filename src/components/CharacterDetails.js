import React from "react";
import { Grid, Image, Button, Segment, Icon, List } from "semantic-ui-react";
import ItemDeLista from "./ItemDeLista";

function CharacterDetails({ character, onClose }) {
  return (
    <Grid columns="two" padded="20px">
      <Grid.Row>
        <Grid.Column computer={8} tablet={8} mobile={16}>
          <Image src={character.image} size="large" wrapped ui={false} />
        </Grid.Column>
        <Grid.Column computer={8} tablet={8} mobile={16}>
          <Segment>
            <List>
              <ItemDeLista texto={"Nombre:"} valor={character.name} />
              <ItemDeLista texto={"Estado:"} valor={character.status} />
              <ItemDeLista texto={"Especie:"} valor={character.species} />
              <ItemDeLista texto={"Tipo:"} valor={character.type} />
              <ItemDeLista texto={"Genero:"} valor={character.gender} />
              <ItemDeLista texto={"Origen:"} valor={character.origin.name} />
              <ItemDeLista
                texto={"Localizacion:"}
                valor={character.location.name}
              />
            </List>

            <List>
              <List.Item>
                <Icon name="film" />
                <List.Content>
                  <List.Header>Episodios:</List.Header>
                  {character.episode.map((ep) => (
                    <List.Description>{ep}</List.Description>
                  ))}
                </List.Content>
              </List.Item>
            </List>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <div className="ui two buttons">
        <Button basic color="black" onClick={onClose}>
          Volver
        </Button>
      </div>
    </Grid>
  );
}

export default CharacterDetails;
