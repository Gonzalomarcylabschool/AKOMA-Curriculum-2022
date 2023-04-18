const knexConfig = require("./knexfile").development
// console.log(knexConfig); // Grab the development object from the knexfile.js
const knex = require("knex")(knexConfig)
// console.log(knex); // Create a knex connection with that object which specifies the db to connect to

// How you get all pets (No Relationships)
const getPets = async () => {
    const dbResults = await knex.raw("SELECT * FROM pets")
    const pets = dbResults.rows
    console.log(pets)
    // const pets = await knex("pets")
    // console.log(pets)
}

// How you get a single pet (No Relationships)
const getPetById = async (petId) => {
    const dbResults = await knex.raw("SELECT * FROM pets WHERE id = ?", [petId])
    const pet = dbResults.rows[0]
    console.log(pet)
    // const pets = await knex("pets").where("id", petId)
    // console.log(pets[0])
}

// How you get all people (No Relationships)
const getPeople = async () => {
    const dbResults = await knex.raw("SELECT * FROM people")
    const people = dbResults.rows
    console.log(people)
    // const people = await knex("people")
    // console.log(people)
}

// How you get all the pets that belong to a certain person (One-To-Many Relationship)
const getPersonsPets = async (userId) => {
    const dbResults = await knex.raw("SELECT * FROM pets WHERE owner_id = ?", [userId])
    const pets = dbResults.rows
    console.log(pets)
    // const pets = await knex("pets").where("owner_id", userId)
    // console.log(pets)
}

// How you get a single customer (No Relationships)
const getCustomerById = async (id) => {
    const dbResults = await knex.raw("SELECT * FROM customers WHERE id = ?", [id])
    const customer = dbResults.rows[0]; //query.rows
    console.log(customer)
    // const customers = await knex("customers").where("id", id)
    // console.log(customers[0])
}

// How you get all the orders from a single customer (One-to-Many Relationship)
const getCutomersOrders = async (userId) => {
    const dbResults = await knex.raw("SELECT * FROM orders WHERE customer_id = ?", [userId])
    const orders = dbResults.rows; 
    console.log(orders)
    // const orders = await knex("orders").where("customer_id", userId)
    // console.log(orders)
}

// How you get all the products ordered by a single customer (Many-to-Many Relationships)
const getCutomersProducts = async (userId) => {
    let query = await knex.raw("SELECT * FROM orders JOIN products ON orders.product_id = products.id WHERE customer_id = ?", [userId])
    let products = query.rows; 
    console.log(products)
    // const products = await knex("orders").join("products", "orders.product_id", "products.id").where("customer_id", userId)
    // console.log(products)
}


const main = async () => {
    await getPets()
    await getPetById(1)
    await getPeople()
    await getPersonsPets(2)
    await getCustomerById(3)
    await getCutomersOrders(1)
    await getCutomersProducts(3)
    knex.destroy()
}

main()

