import './style.css';
import { newTask } from './modules/task.js';
import * as addingTask from './modules/addingTasks.js';
// import { renderList } from './modules/renderView.js';
import deleteItem from './modules/deletingTask.js';
const list = document.querySelector('.list');
export { list };
// task.getTasks();
newTask.getTasks();
deleteItem();
