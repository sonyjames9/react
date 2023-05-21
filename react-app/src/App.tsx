import { useState } from "react";
import ListGroup from "./components/ListGroup/ListGroup";

function App() {
  const items = ["NY", "LA", "SF"];

  return (
    <div>
      <ListGroup
        heading="Miami"
        items={items}
        onSelectItem={() => console.log(items)}
      />
    </div>
  );
}

export default App;
