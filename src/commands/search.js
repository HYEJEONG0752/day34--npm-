import inquirer from "inquirer";
import { loadTodos } from "../utils/fileHandler.js";
import { displayTodos } from "../utils/formatter.js";
import _ from "lodash";
import chalk from "chalk";

/**
 * 할 일을 검색합니다.
 */
async function searchTodo() {
    const todos = await loadTodos();

    if (todos.length === 0) {
        console.log(chalk.yellow('검색할 할 일이 없습니다.'));

        return;
    }

    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "keyword",
            message: "검색할 키워드를 입력하세요:",
            validate: input => input ? true : '키워드를 입력해야 합니다.'
        }
    ]);

    const keyword = answer.keyword.toLowerCase();
    const filteredTodos = _.filter(todos, todo =>
        todo.title.toLowerCase().includes(keyword) ||
        todo.description.toLowerCase().includes(keyword)
    );

    if (filteredTodos.length === 0) {
        console.log(chalk.red('일치하는 할 일을 찾을 수 없습니다.'));
    } else {
        displayTodos(filteredTodos);
    }
}

export { searchTodo };