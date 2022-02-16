// let num = 0;
const tasks = [];

// const getNum = () => {
// 	if (localStorage.getItem('num'))
// 		num = JSON.parse(localStorage.getItem('num'));
// };

const getTasks = () => {
	if (localStorage.getItem('tasks'))
		tasks = JSON.parse(localStorage.getItem('tasks'));
};

const setTask = () => {
	localStorage.setItem('tasks', JSON.stringify(tasks));
};

export { tasks, getTasks, setTask };
