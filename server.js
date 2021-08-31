const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    id: Int!
    random: Float!
    double: [Int]
  }
`);

const root = {
    id: ()=> {return 1;},
    random: () => {return Math. random();},
    double: () => {return [1, 2, 3].map((_) => _ * 2);},
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
