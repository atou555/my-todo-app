const config = {
    server: {
      port: process.env.PORT || 5000,
    },
    db: {
      uri: process.env.MONGODB_URI || "mongodb://localhost:27017/my-todo-app",
    },
    jwt: {
      secret: process.env.JWT_SECRET || "mysecretkey",
      expiresIn: "30d",
    },
  };
  
  export default config;
  