const users = [{name:"dogPerson123", password:"ADGQW4E42341!@#%$#%!^$%&^12S2" }]; // our "database"

const hash = (pw) => {
  return someComplexAlgorithm(pw);
}

const createNewUser = (username, password) => {
  const hashedPassword = hash(password); // fjbkaiqifc

  // store the username + hashed password in the database
  users.push({ username, hashedPassword });
}

createNewUser('dogPerson123', 'ilovedogs')