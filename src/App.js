import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import CharacterList from "./components/CharacterList";
import CharacterDetails from "./components/CharacterDetails";

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleShowDetails = (character) => {
    setSelectedCharacter(character);
  };

  const handleCloseDetails = () => {
    setSelectedCharacter(null);
  };

  return (
    <div>
      {selectedCharacter ? (
        <CharacterDetails
          character={selectedCharacter}
          onClose={handleCloseDetails}
        />
      ) : (
        <CharacterList onShowDetails={handleShowDetails} />
      )}
    </div>
  );
}

export default App;
