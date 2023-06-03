import { useState } from "react";

function App() {
  //     const [game, setGame] = useState({
  //       id: 1,
  //       player: {
  //         name: "John",
  //       },
  //     });
  //
  //     const handleClick = () => {
  //       // setGame({...game, player : {name: 'Bob'}})
  //       setGame({
  //         ...game,
  //         player: {
  //           ...game.player,
  //          Change player name
  //           name: "Bob",
  //         },
  //       });
  //     };

  //   const [pizza, setPizza] = useState({
  //     name: 'Spicy Pepperoni',
  //     toppings: ['Mushroom']
  //   });
  //
  //   const handleClick = () => {
  //
  //     // Add toppings to pizza
  //     setPizza({ ...pizza, toppings: [...pizza.toppings, 'Cheese']})
  //   };

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product1", quantity: 1 },
      { id: 2, title: "Product2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    // Update quanity of a Prodct
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  return <div></div>;
}

export default App;
