$(() => {
	let nIntervalId;
	let groupList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
	let num = 0;
	$('.roulette').text(groupList[num]);

	const startRoulette = (max) => {
		num = Math.floor(Math.random() * max);
		$('.roulette').text(groupList[num]);
	}

	const stopRoulette = () => {
		clearInterval(nIntervalId);
		nIntervalId = null;
		groupList.splice(num, 1);
	}

	const runRoulette = () => {
		startRoulette(groupList.length);
	}

	$('.btn').on('click', function () {
		if (!nIntervalId) {
			$(this).text('STOP');
			nIntervalId = setInterval(runRoulette, 20);
		} else {
			$(this).text('START');
			stopRoulette();
		}
	});
});