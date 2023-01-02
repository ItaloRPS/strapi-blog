module.exports = ({ env }) => ({
  // connection: {
  //   client: 'postgres',
  //   connection: {
  //     host: env('DATABASE_HOST', 'berry.db.elephantsql.com'),
  //     port: env.int('DATABASE_PORT', 5432),
  //     database: env('DATABASE_NAME', 'jyogiikg'),
  //     user: env('DATABASE_USERNAME', 'jyogiikg'),
  //     password: env('DATABASE_PASSWORD', 'JSEmZWBovZo5X_js0GsWCb9e7stLtmQa'),
  //     ssl: env.bool('DATABASE_SSL', true),
  //   },
  // },


  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', ''),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', ''),
      user: env('DATABASE_USERNAME', ''),
      password: env('DATABASE_PASSWORD', ''),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
      },
    },
    debug: false,
    pool:{
      min:0,
      max:5
    }
    },
});


  