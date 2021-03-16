module.exports = ({ env }) => ({
  connections: {
    default: {
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "strapi"),
        username: env("DATABASE_USERNAME", "strapi"),
        password: env("DATABASE_PASSWORD", "strapi"),
      },
      options: {
        ssl: false,
        useNullAsDefault: true,
      },
    },
  },
});
