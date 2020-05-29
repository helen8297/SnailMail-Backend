const { query } = require("../index");

const usersList = [
  {
    name: "Liz Kaufman",
    address: "1 Tony Avenue, Nottingham",
    postcode: "NG2 5BA",
    friend_ids: [2, 3, 4],
  },
  {
    name: "Kelen Hent",
    address: "1 Kelen Drive, Tamworth",
    postcode: "BH2 4KH",
    friend_ids: [1, 3, 4],
  },
  {
    name: "Sarah Barkley",
    address: "1 Birdsong Drive, Derby",
    postcode: "DE1 1AB",
    friend_ids: [1, 2, 4],
  },
  {
    name: "James Greygoose",
    address: "1 THE GOOSE Place",
    postcode: "BH1 1BA",
    friend_ids: [1, 2, 3],
  },
];

async function populateUsersList() {
  for (let i = 0; i < usersList.length; i++) {
    const { name, address, postcode, friend_ids } = usersList[i];

    const res = await query(
      `INSERT INTO users (name, address, postcode, friend_ids) values ($1,$2,$3,$4)`,
      [name, address, postcode, friend_ids]
    );
    console.log(`Log:Populated table with ${name}`);
  }
}

populateUsersList();
