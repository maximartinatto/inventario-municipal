require('dotenv').config();
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const PORT = process.env.PORT || 3001;
conn.sync({ alter: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`Server listenin in port: ${PORT}`); // eslint-disable-line no-console
  });
}); 