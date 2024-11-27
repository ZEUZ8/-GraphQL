export const typesDefs = `#graphql
 type Game {
    id:ID!
    title: String!
    platform: [String!]!
    
 }
 type Review {
    id: ID!,
    rating: Int!
    content: String!
 }
 
 type Author {
    id: ID!
    name: String!
    verified: Boolean!
 }
 
 type Query{
    reviews:[Reviews]
    games: [Games]
    authors: [Author]
 }

`

//built in graphql there five basic scalar types that we can use
// int, float, stings, boolean, ID,
