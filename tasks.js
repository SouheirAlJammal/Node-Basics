
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

var taskList = [];
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
    let stringLength = splitedText.length;
    let argument = splitedText.slice(1).join(' ');
    console.log(argument);
    hello(argument, stringLength);

  }
  else if (text === 'help') {
    help();



  } else if (splitedText[0] === 'list') {

    listedTask(taskList);
    console.log(taskList);

  } else if (splitedText[0] === 'add') {

    var TaskProperties = {
      'task': '',
      'done': false
    };

    TaskProperties.task = splitedText.slice(1).join(' ');
    taskList.push(TaskProperties);
    addTask(TaskProperties.task);

  } else if (splitedText[0] === 'remove') {
    let taskIndex = splitedText.slice(1).join(' ');
    removeTask(taskIndex);
  }
  else if (splitedText[0] === 'edit') {
    let editRequest = splitedText.slice(1).join(' ');
    editTask(editRequest);
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
function help() {
  console.log(
    `
  hello (Name)  command says hello!
  quit   command to quit App
  exit   command to quit App
  add    command to add task 
  remove (index of element) command remove elt
  edit (index of Task) (edited task)

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

/**
 *@param {array}
 */
function listedTask(tasks) {
  console.log(tasks);
  if (taskList.length === 0) { console.log('there is No tasks yet') }
  else {
    for (let i = 0; i < tasks.length; i++) {
      if (taskList[i].done) console.log(`${i + 1}-[✓]${tasks[i].task.trim()}`);
      else console.log(`${i + 1}-[ ]${tasks[i].task.trim()}`)
    }
  }
}

/**
 *
 *
 * @param {array} Tasks
 * @param {number} tasksLength
 */
function addTask(newTask) {
  if (newTask === '') { console.log('No task have been added') }
  else { console.log(`"${newTask}" added successfully`) }
}


function removeTask(taskIndex) {

  if (taskIndex === '') { taskList.splice(taskList.length - 1, 1) }
  else if (taskIndex > 0 && taskIndex < taskList.length) { taskList.splice(taskIndex - 1, 1); }
  else console.log("Task does not exist")

}

function editTask(editRequest) {
  let checkNbr = /\d+/g;
  if (editRequest === '') console.log("write the new task you want to change");
  else if (editRequest.match(checkNbr) === null) { taskList[(taskList.length) - 1].task = editRequest }
  else { taskList[editRequest[0] - 1].task = editRequest.slice(1) };
}
// The following line starts the application
startApp("Souheir Al Jammal")