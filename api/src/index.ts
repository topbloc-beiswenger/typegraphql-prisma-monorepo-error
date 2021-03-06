import "reflect-metadata";
import express from "express";
import { resolvers } from "@typegraphql-prisma-monorepo/prisma";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import http from "http";

const main = async () => {
  const app = express();

  const schema = await buildSchema({
    resolvers: [...resolvers],
  });

  const httpServer = http.createServer(app);

  const apolloServer = new ApolloServer({
    schema,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
};

main();
