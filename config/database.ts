export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'),
      ssl: {
        rejectUnauthorized: false, // Render требует SSL
      },
    },
    pool: { min: 2, max: 10 },
  },
});
