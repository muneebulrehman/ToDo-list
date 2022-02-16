import { renderList } from './renderView.js';
class Task {
	tasks = [];
	getTasks = () => {
		if (localStorage.getItem('tasks'))
			this.tasks = JSON.parse(localStorage.getItem('tasks'));
	};

	setTask = () => {
		localStorage.setItem('tasks', JSON.stringify(this.tasks));
		this.getTasks();
	};
	resetId = (num) => {
		this.tasks.forEach((task) => {
			if (task.index > num) task.index--;
		});
		this.setTask();
		this.getTasks();
		renderList();
	};
}

const newTask = new Task();

export { newTask };
