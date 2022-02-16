import { newTask } from './task.js';
import { list } from '../index.js';
import { renderList } from './renderView.js';

// const deleteItem = () => {
// 	if (newTask.tasks.length !== 0) {
// 		let items = document.querySelectorAll('.item');
// 		const deleteBtns = document.querySelectorAll('.delete');
// 		const threeDots = document.querySelectorAll('.three-dots');
// 		items.forEach((el) => {
// 			el.addEventListener('click', (e) => {
// 				items.forEach((el) => {
// 					el.style.backgroundColor = 'transparent';
// 				});
// 				deleteBtns.forEach((el) => {
// 					el.classList.add('hidden');
// 				});
// 				threeDots.forEach((el) => {
// 					el.classList.remove('hidden');
// 				});
// 				const num = e.currentTarget.dataset.id;
// 				if (
// 					!e.target.parentElement.classList.contains('three-dots') &&
// 					!e.target.classList.contains('checkbox') &&
// 					!e.target.classList.contains('dot-svg')
// 				) {
// 					e.currentTarget.style.backgroundColor = 'lightyellow';
// 					const delBtn = e.currentTarget.lastElementChild;
// 					const dotBtn = delBtn.previousElementSibling;
// 					hitDelete(delBtn);
// 					delBtn.classList.toggle('hidden');
// 					dotBtn.classList.toggle('hidden');
// 				}
// 			});
// 		});
// 	}
// };

// const deleteItem = () => {
// 	if (newTask.tasks.length !== 0) {
// 		let items = document.querySelectorAll('.item');
// 		const deleteBtns = document.querySelectorAll('.delete');
// 		const threeDots = document.querySelectorAll('.three-dots');

// 		list.addEventListener('click', (e) => {
// 			items.forEach((el) => {
// 				el.style.backgroundColor = 'transparent';
// 			});
// 			deleteBtns.forEach((el) => {
// 				el.classList.add('hidden');
// 			});
// 			threeDots.forEach((el) => {
// 				el.classList.remove('hidden');
// 			});
// 			const targetEl = e.target.closest('.item');
// 			if (
// 				!e.target.parentElement.classList.contains('three-dots') &&
// 				!e.target.classList.contains('checkbox') &&
// 				!e.target.classList.contains('dot-svg')
// 			) {
// 				targetEl.style.backgroundColor = 'lightyellow';
// 				const delBtn = targetEl.lastElementChild;
// 				const dotBtn = delBtn.previousElementSibling;
// 				hitDelete(delBtn);
// 				delBtn.classList.toggle('hidden');
// 				dotBtn.classList.toggle('hidden');
// 			}
// 		});
// 	}
// };

const deleteItem = () => {
	if (newTask.tasks.length !== 0) {
		document.body.addEventListener('click', (e) => {
			resetBg();
			if (e.target.classList.contains('content')) {
				resetChangingEl();
				const content = e.target;
				const numId = +content.dataset.id;
				const overRide = document.getElementById(numId);
				content.hidden = true;
				overRide.hidden = false;
				overRide.focus();
				overRide.addEventListener('change', () => {
					console.log('i am changing');
					const value = overRide.value;
					newTask.tasks.find((el) => {
						console.log(el, numId);
						if (el.index === numId) el.description = value;
					});
					newTask.setTask();
					resetChangingEl();
				});
			}
			if (e.target.closest('.item')) {
				const targetEl = e.target.closest('.item');
				if (
					!e.target.parentElement.classList.contains('three-dots') &&
					!e.target.classList.contains('checkbox') &&
					!e.target.classList.contains('dot-svg')
				) {
					targetEl.style.backgroundColor = 'lightyellow';
					const delBtn = targetEl.lastElementChild;
					const dotBtn = delBtn.previousElementSibling;
					hitDelete(delBtn);
					delBtn.classList.toggle('hidden');
					dotBtn.classList.toggle('hidden');
				}
			} else resetChangingEl();
		});
	}
};
export default deleteItem;

const hitDelete = (delBtn) => {
	const num = +delBtn.dataset.id;

	delBtn.addEventListener('click', () => {
		newTask.tasks = newTask.tasks.filter((el) => el.index !== num);
		newTask.setTask();
		newTask.resetId(num);
	});
};

const resetBg = () => {
	let items = document.querySelectorAll('.item');
	const deleteBtns = document.querySelectorAll('.delete');
	const threeDots = document.querySelectorAll('.three-dots');

	items.forEach((el) => {
		el.style.backgroundColor = 'transparent';
	});
	deleteBtns.forEach((el) => {
		el.classList.add('hidden');
	});
	threeDots.forEach((el) => {
		el.classList.remove('hidden');
	});
};

const resetChangingEl = () => {
	const content = document.querySelectorAll('.content');
	const changeText = document.querySelectorAll('.change-text');
	content.forEach((el) => {
		el.hidden = false;
	});
	changeText.forEach((el) => {
		el.hidden = true;
	});
};
