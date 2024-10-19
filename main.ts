import inquirer from "inquirer";

let todos=[];

let condition = true;

while(condition)   //for repeating the loop//
    {

let todoQuestions = await inquirer.prompt(
   [
    {
        name: "firstQuestion",
        type: "input",    //only one input it will ask and take and write ,  for ask in yes os no just replace input to confirm but no input//
        message: "what would you like to add in your todos?",
    },
    {
        name: "secondQuestion",
        type: "confirm",// this will confirm yes or no, no input it will take //
        message: "what would you like to add more in your todos?",
        default: "true",//answer will be always yes//
    },
    
]);
todos.push(todoQuestions.firstQuestion); //to add data in array we use push//
console.log(todos);

condition = todoQuestions.secondQuestion; // this indicates loop depends on second condition if yes it repeats and no it stops//
    }