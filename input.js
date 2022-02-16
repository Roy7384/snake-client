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
    const keys = ['w', 'a', 's', 'd'];
    const move = ['Move: up', 'Move: left', 'Move: down', 'Move: right'];
    if (keys.includes(data)) {
      const input = move[keys.indexOf(data)];
      connection.write(input);
    }
  };
  
  stdin.on('data', handleUserInput);

  return stdin;
};

module.exports = {setupInput};
