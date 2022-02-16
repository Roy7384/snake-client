const {keyBinds} = require('./constant');
let connection;

// setup interface to handle user input from stdin

const setupInput = function(conn) {

  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function(data) {
    if (data === '\u0003') {
      console.log('Thanks for playing snake, ciao!');
      process.exit();
    }
    connection.write(keyBinds[data]);
    connection.write(`Say: ${data}`);
  };
  
  stdin.on('data', handleUserInput);

  return stdin;
};

module.exports = {setupInput};
