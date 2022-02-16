import { tasks, getTasks, setTask } from './task.js';
import { renderList } from './renderView.js';

class EachTask {
	constructor(description, completed, index) {
		this.description = description;
		this.completed = completed;
		this.index = index;
	}
}
const addBtn = document.querySelector('.add');
const input = document.querySelector('.add-here');
const form = document.querySelector('.form');

[addBtn, form].forEach((el) => {
	const event = el.classList.contains('add') ? 'click' : 'submit';
	el.addEventListener(event, (e) => {
		e.preventDefault();
		const desc = input.value;
		if (!desc) return;
		const task = new EachTask(desc, false, tasks.length);
		tasks.push(task);
		setTask();
		renderList();
		input.value = '';
		input.focus();
	});
});
