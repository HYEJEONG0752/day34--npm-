import inquirer from "inquirer";
import chalk from "chalk";
import { addTodo } from "./commands/add.js"
import { listTodos } from "./commands/list.js";
import { deletedTodo } from "./commands/delete.js";
import { completedTodo } from "./commands/complete.js";
import { searchTodo } from "./commands/search.js";

/**
 * 사용자가 선택한 작업을 실행합니다.
 */
async function main() {
    const {action} = await inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "원하는 작업을 선택하세요:",
            choices: [
                "할 일 추가",
                "할 일 목록 보기",
                "할 일 삭제",
                "할 일 완료 표시",
                "할 일 검색",
                "종료"
            ]
        }
    ]);

    switch (action) {
        case "할 일 추가":
            await addTodo();
            break;
        case "할 일 목록 보기":
            await listTodos();
            break;
        case "할 일 삭제":
            await deletedTodo();
            break;
        case "할 일 완료 표시":
            await completedTodo();
            break;
        case "할 일 검색":
            await searchTodo();
            break;
        case "종료":
            console.log(chalk.blue("프로그램을 종료합니다."));
            process.exit();
        default:
            console.log(chalk.red("알 수 없는 명령어입니다."));
    }

    // 작업이 끝난 후 다시 메뉴 표시
    main();
}

// 애플리케이션 시작
main();