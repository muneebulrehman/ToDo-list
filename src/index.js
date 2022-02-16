import './style.css';
import * as task from './modules/task.js';
import * as addingTask from './modules/addingTasks.js';
import { renderList } from './modules/renderView.js';

const list = document.querySelector('.list');
export { list };
task.getTasks();
renderList();
