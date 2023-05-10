const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./config/connection");
const { ApolloServer } = require("apollo-server-express");
// import ApolloServer
const { typeDefs, resolvers } = require("./Schemas");
// import typeDefs and resolvers
const routes = require("./routes");
const { authMiddleware } = require("./utils/auth");
// import authMiddleware function

  const app = express();
  const PORT = process.env.PORT || 3001;
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // if (process.env.NODE_ENV === "production") {
  //   app.use(express.static(path.join(__dirname, "../client/build")));
  // }
  // if (process.env.NODE_ENV === "production") {
  //   app.use(express.static(path.join(__dirname, "../client/build")));
  // }
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });

  app.use(routes);

  // app.get("/", (req, res) => {
  //   res.sendFile(path.join(__dirname, "../client/build/index.html"));
  // });

  const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });
  
    db.once('open', () => {
      app.listen(PORT, () => {
        // console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
      });
    });
  };

// db.once(app.listen({ port:PORT }))
//   console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
//   return { server, app };
// };
startApolloServer(typeDefs, resolvers);


