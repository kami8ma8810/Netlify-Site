'use strict';

{
	const btn = document.getElementById('btn');
	const result = document.getElementById('result');
	// const resultList = ['カルビ', 'ロース', 'タン塩'];

	btn.addEventListener('click', () => {
		if (result.classList.contains('big') === true) {
			result.classList.remove('big');
		};
		// result.textContent = resultList[Math.floor(Math.random() * resultList.length)];
		const n = Math.random();
		if (n < 0.1) {
			result.textContent = '特上カルビ'; //5%
			result.classList.add('big');
		} else if (n < 0.3) {
			result.textContent = 'タン塩' //20%
		} else {
			result.textContent = 'ロース' //75%
		}

		// switch (n) {
		// 	case 0:
		// 		btn.textContent = 'カルビ';
		// 		break;
		// 	case 1:
		// 		btn.textContent = 'ロース';
		// 		break;
		// 	case 2:
		// 		btn.textContent = 'タン塩';
		// 		break;
		// }

	});
}