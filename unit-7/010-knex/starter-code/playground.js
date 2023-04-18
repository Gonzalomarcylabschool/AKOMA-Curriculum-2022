const knexConfig = require("./knexfile").development;

const knex = require("knex")(knexConfig)

const getPets = async () => {
  let query = await knex.raw("SELECT * FROM pets");
  let pets = query.rows;
  console.table(pets);
}

const getOnePet = async (petId) =>{
  const dbResults = await knex.raw("SELECT * FROM pets WHERE id = ?;", [petId]);
  const pet = dbResults.rows[0];
  console.log(pet)
  const pets = await knex("pets").where("id", petId)
  console.log(pets[0])
}

getOnePet();
// const main = async () => {
//   await getPets() // Test to see if knex is configured correctly to connect to your database
//   knex.destroy()
// }

// main()