const net = require("net");
const {IP, PORT} = require('./constant');


// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP , // IP address here,
    port: PORT // PORT number here,
  });

  conn.on('connect', () => {
    console.log('Connection made');
  });
  conn.write('Name: ROY');

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data', (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = {connect};