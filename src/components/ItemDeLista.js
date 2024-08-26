import React from "react";
import {
    ListItem,
    ListHeader,
    ListDescription,
    ListContent,
    Icon,
  } from "semantic-ui-react";

function ItemDeLista({ texto, valor }) {
  return (
    <ListItem>
      <Icon name="right triangle" />
      <ListContent>
        <ListHeader>{texto}</ListHeader>
        <ListDescription>{valor}</ListDescription>
      </ListContent>
    </ListItem>
  );
}

export default ItemDeLista;
