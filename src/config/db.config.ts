

interface DbConfig {
    mongoURI: string;
  }

  const config: DbConfig = {
    mongoURI: process.env.MONGODB_URI || "mongodb://localhost:30000",
  };
  
  export default config;
  
  