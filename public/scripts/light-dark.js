if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
	document.documentElement.classList.add('wa-dark');
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
	if (event.matches) {
		document.documentElement.classList.add('wa-dark');
	} else {
		document.documentElement.classList.remove('wa-dark');
	}
});
