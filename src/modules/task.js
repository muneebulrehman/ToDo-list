import { renderList } from './renderView.js';
// let num = 0;
// let tasks = [];

// const getNum = () => {
// 	if (localStorage.getItem('num'))
// 		num = JSON.parse(localStorage.getItem('num'));
// };

// const getTasks = () => {
// 	if (localStorage.getItem('tasks'))
// 		tasks = JSON.parse(localStorage.getItem('tasks'));
// };

// const setTask = () => {
// 	localStorage.setItem('tasks', JSON.stringify(tasks));
// };

// export { tasks, getTasks, setTask };

class Task {
	tasks = [];
	getTasks = () => {
		if (localStorage.getItem('tasks'))
			this.tasks = JSON.parse(localStorage.getItem('tasks'));
		renderList();
	};

	setTask = () => {
		localStorage.setItem('tasks', JSON.stringify(this.tasks));
		renderList();
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
