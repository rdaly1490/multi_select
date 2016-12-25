const inputs = document.querySelectorAll('input');
let lastChecked = inputs[0];

function onInputClick(e) {
	let inBetween = false;
	if (e.shiftKey && this.checked && lastChecked.checked) {
		inputs.forEach(input => {
			if (input === this || input === lastChecked) inBetween = !inBetween;
			if (inBetween) input.checked = true;
		});
	}
	lastChecked = this;
}

inputs.forEach(input => input.addEventListener('click', onInputClick));