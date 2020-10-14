import express from "express";
import { ApolloServer, makeExecutableSchema } from "apollo-server-express";
import typeDefs from "./gql/typeDefs";
import resolvers from "./gql/resolvers";
import cors from "cors";

const app = express();

app.use(
  cors({
    credentials: false,
    origin: "http://localhost:3000",
  })
);

const schema = makeExecutableSchema({ typeDefs, resolvers });
const apolloServer = new ApolloServer({
  schema,
  context: ({ req, res }: any) => ({
    req,
    res,
  }),
});
apolloServer.applyMiddleware({ app, cors: false });

const port = 8000;
app.listen({ port: port }, () => {
  console.log(
    `Server ready on http://localhost:${port}${apolloServer.graphqlPath}`
  );
});
