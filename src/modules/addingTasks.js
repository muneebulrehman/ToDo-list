import { tasks, getTasks, setTask } from './task.js';

class EachTask {
	constructor(description, completed, index) {
		this.description = description;
		this.completed = completed;
		this.index = index;
	}
}
const addBtn = document.querySelector('.add');
const input = document.querySelector('.add-here');

addBtn.addEventListener('click', () => {
	const desc = input.value;
	if (!desc) return;
	const task = new EachTask(desc, false, tasks.length);
	tasks.push(task);
	setTask();
});
