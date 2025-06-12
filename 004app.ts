import inquirer from "inquirer";
import chalk from "chalk";

async function askQuestion(){
    let question = await inquirer.prompt([
        {
            name: "age",
            type: "number",
            message: "What is your age?"
        }
    ])
    console.log(chalk.green`your age is ${question.age}`);
}
askQuestion();