
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {

  text = text.replace(/\n/g, '').trim();
  let splitedText = text.split(' ');

  if (text === 'quit' || text === 'exit') {
    quit();
  }
  else if (splitedText[0] === 'hello') {
   process.env.HANDEL_COMMAND=text;
    let stringLength = splitedText.length;
    let argument = splitedText.slice(1).join(' ');
    hello(argument, stringLength);

  }
  else if (text === 'help') {
    help(process.env.HANDEL_COMMAND);
  }
  else {
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c + '"')
}


/**
 * Says hello
 *@param {string,number} 
 * @returns {void}
 */
function hello(argument, stringLength) {
  if (stringLength === 1) console.log("hello!")
  else console.log(`hello ${argument}!`)
}



/**
 *Function list differents command used in App
 *
 * @param {text} text data typed by the user
 * @returns {void}
 */
function help(argHelloCommand) {
  console.log(
    `
  ${argHelloCommand}  command says hello!
  quit   command to quit App
  exit   command to quit App

 `)
}



/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Souheir Al Jammal")
