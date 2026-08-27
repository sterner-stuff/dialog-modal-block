document.querySelectorAll('.wp-block-sterner-stuff-dialog-modal-block').forEach((dialog) => {
	console.log(JSON.parse(dialog.dataset.blockAttributes).triggerSelector);
	const triggers = document.querySelectorAll(JSON.parse(dialog.dataset.blockAttributes).triggerSelector);
	
	triggers.forEach((trigger) => {
		trigger.addEventListener('click', () => {
			dialog.showModal();
		});
	});
});