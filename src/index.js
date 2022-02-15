import './style.css';

const list = document.querySelector('.list');
const num = document.querySelector('.number');

const arr = [{
  description: 'Book 1',
  completed: false,
  index: 0,
},
{
  description: 'Book 2',
  completed: true,
  index: 1,
},
{
  description: 'Book 3',
  completed: false,
  index: 2,
},
];

const render = () => {
  /* eslint-disable */
  for (const item of arr) {
    const checked = item.completed ? 'checked' : '';
		const html = `<div class="item">
						<div class="left">
							<input type="checkbox" class="checkbox" ${checked} />
							<span class="content">${item.description}</span>
						</div>
						<button type="button" class="icon three-dots">
							<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"
								/>
							</svg>
						</button>
						<button type="button" class="icon delete hidden">
							<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"
								/>
							</svg>
						</button>
					</div>`;
		/* eslint-enable */
    list.insertAdjacentHTML('beforeend', html);
  }
  num.textContent = arr.length;
};

render();