import inquirer from "inquirer";

async function askQuestion( ) {
    let Question = await inquirer.prompt([
        {
            name: "age",
            type: "number",
            message: "What is your age?"
        },
        {
            name: "name",
            type: "input",
            message: "What is your name?"
        }
    ]);
    console.log(`Inshallah (After ${50 -Question.age}) year you will be 50 years old `);
}
console.log(askQuestion());
