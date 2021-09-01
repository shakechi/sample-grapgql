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

  # Read
  type Query {
    getCharacter(name: String): Character
  }

  # Create, Update, Delete
  type Mutation {
    createCharacter(name: String): Character
    updateChatacter(id: String): Character
    deleteCharacter(id: String): Character
  }

`);

class Character {
  constructor(name) {
    this.name = name;
  }
}

const root = {
    getCharacter: ({name}) =>{
      if(!fakeDatabase[id]){
        thrownewError('no exist id：' + id);
      }
      return new Character(id, fakeDatabase[id]);
    },
    updateCharacter: ({id}) => {

    },
    deleteCharacter: ({id}) => {

    }
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000, () => console.log('Now browse to http://localhost:4000/graphql'));
