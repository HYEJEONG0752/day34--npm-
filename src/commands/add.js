import inquirer from "inquirer";
import { saveTodos, loadTodos } from "../utils/fileHandler.js";
import { v4 as uuidv4 } from "uuid";
import chalk from "chalk";

/**
 * 할 일을 추가합니다.
 */
async function addTodo() {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "할 일의 제목을 입력하세요:",
            validate: (input) => (input ? true : "제목을 입력해야 합니다."),
        },
        {
            type: "input",
            name: "description",
            message: "할 일의 설명을 입력하세요. (선택 사항):",
        },
    ]);

    const todos = await loadTodos();

    todos.push({
        id: uuidv4(),
        title: answers.title,
        description: answers.description || "",
        completed: false
    });

    await saveTodos(todos);

    console.log(chalk.green("할 일이 성공적으로 추가되었습니다."));
}

export { addTodo };
//addTodo();
