//your JS code here. If required.
const form = document.querySelector('form');
form.addEventListener('submit' , (e)=>{
	e.preventDefault();
	let fontcolor = form.fontcolor.value;
	let fontsize = form.fontsize.value;
	document.cookie = `color=${fontcolor}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
	document.cookie = `size=${fontsize}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
});

window.onload = () => {
	let cookies = document.cookie.split('; ');
	let color = cookies.find(cookie => cookie.startsWith('color=')).split('=')[1];
	let size = cookies.find(cookie => cookie.startsWith('size=')).split('=')[1];
	if(color && size){
		form.fontcolor.value = color;
		form.fontsize.value = size;
		document.documentElement.style.setProperty('--fontcolor', color);
		document.documentElement.style.setProperty('--fontsize', `${size}px`);
	}
};