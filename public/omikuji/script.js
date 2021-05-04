'use strict';

{
	const btn = document.getElementById('btn');

	btn.addEventListener('click', () => {
		// const results = ['カルビ', 'ロース', 'タン塩'];
		const results = ['カルビ', 'ロース', 'タン塩'];
		// const n = Math.floor(Math.random() * results.length);
		btn.textContent = results[Math.floor(Math.random() * results.length)];
		const n = Math.random();
		if (n < 0.05) {
			btn.textContent = '特上カルビ' //5%
		} else if (n < 0.2) {
			btn.textContent = '上カルビ' //20%
		} else {
			btn.textContent = 'カルビ' //75%
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