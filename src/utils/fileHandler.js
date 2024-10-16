import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//DB(file,local)
const filePath = path.join(__dirname, "../../data/todos.json");

/**
 * 할 일 데이터를 로드합니다.
 * @return {Promise<Array>}할 일 목록
 */
async function loadTodos() {
    try {
        const exists = await fs.pathExists(filePath);

        if (!exists) {
            await fs.writeJson(filePath, []);
        }

        return await fs.readJson(filePath);
    } catch (error) {
        console.error("할 일 데이터를 로드하는 중 오류 발생:", error);

        return [];
    }
}

/**
 * 할 일 데이터를 저장합니다.
 * @param {Array} todos 할 일 목록
 */
async function saveTodos(todos) {
    try {
        await fs.writeJSON(filePath, todos, { spaces: 2 });
    } catch (error) {
        console.error("할 일 데이터를 저장하는 중 오류 발생:", error);
    }
}

export { loadTodos, saveTodos};