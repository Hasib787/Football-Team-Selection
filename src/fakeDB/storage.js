//use local storage as a database
const addToDb = (id) => {
  const exists = localStorage.getItem("player_cart");
  let player_cart = {};
  if (!exists) {
    player_cart[id] = 1;
  } else {
    player_cart = JSON.parse(exists);
    if (player_cart[id]) {
      const newCount = player_cart[id] + 1;
      player_cart[id] = newCount;
    } else {
      player_cart[id] = 1;
    }
  }
  updateDb(player_cart);
};

const updateDb = (cart) => {
  localStorage.setItem("player_cart", JSON.stringify(cart));
};

//remove item form local Storage
const removeFromDb = (id) => {
  const exists = localStorage.getItem("player_cart");
  if (exists) {
    const player_cart = JSON.parse(exists);
    delete player_cart[id];
    updateDb(player_cart);
  }
};
export { addToDb, removeFromDb };
