export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('postgresql://ashley_tc4n_user:MIcILbfb517q9dswpZyq6OgyXeegDmNY@dpg-d3a9kqbipnbc739dtn1g-a.frankfurt-postgres.render.com/ashley_tc4n'),
      ssl: {
        rejectUnauthorized: false, // для Render обязательно
      },
    },
    pool: { min: 2, max: 10 },
  },
});
