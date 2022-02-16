import './style.css';
import { newTask } from './modules/task.js';
import * as addingTask from './modules/addingTasks.js';
import deleteItem from './modules/deletingTask.js';
const list = document.querySelector('.list');
const number = document.querySelector('.number');
export { list, number };
newTask.getTasks();
deleteItem();
