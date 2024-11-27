import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import db from "./_db.js";

const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    authors() {
      return db.authors;
    },
    reviews() {
      return db.reviews;
    },
    review(_,args,context){
        return db.reviews.find((review)=> review.id === args.id)
    }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  /*Type Defs
            type defs are definitions of different types of data we want
            to expose on our graph
            for examples we might make a type def for ant author data and specify the
            different fields that author might have like a name, an avatar URL, Bio ect
            and we might have one for game which is an title a price a platform Etc 
            so these would be the different types of data that we want to make available on 
            graph that user can then eventually query and the combination of all of these different types and the relationship to other types and the kinds of queries that can be made 
            combine up to make something called a schema 
            so the -schema- is soemthing that describes the shape of the graph and data abailable on it and normaly you graphql schema the data that's available on the graph will be fairly similar to the data your storing in your applciation it can be differet
     */
  /*resolvers
            In GraphQL, resolvers are functions that handle the logic for fetching or processing data in response to specific fields in a query or mutation. They act as the link between the schema and the data source, determining what data is returned for a particular query.*/
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("Server ready at port", 4000);
