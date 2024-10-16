import { loadTodos  } from "../utils/fileHandler.js";
import { displayTodos  } from "../utils/formatter.js";

/**
 * 할 일 목록을 조회합니다.
 */
async function listTodos() {
    const todos = await loadTodos();

    displayTodos(todos);
}

export { listTodos };