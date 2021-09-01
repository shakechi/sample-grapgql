const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Character {
    id: ID!
    name: String
    hp: Int
    equipment: [String]
  }

  type Query {
    getCharacter(name: String): Character
  }
`);

class Character {
  constructor(name) {
    this.name = name;
  }
}

const root = {
    getCharacter: ({name}) =>{
      return new Character(name);
    }
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000, () => console.log('Now browse to http://localhost:4000/graphql'));
