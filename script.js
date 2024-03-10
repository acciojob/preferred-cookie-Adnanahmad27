//your JS code here. If required.
const form = document.querySelector('form');
let haveValue = false;
localStorage.setItem('thing1','rahul');
localStorage.getItem('thing1');
localStorage.removeItem('thing1');

form.addEventListener('submit' , (e)=>{
	e.preventDefault();
	let fontcolor = form.fontcolor.value;
	let fontsize = form.fontsize.value;
	localStorage.setItem('color',fontcolor);
	localStorage.setItem('size',fontsize);
	haveValue = true;
});
if(haveValue){
	form.fontcolor.value = localStorage.getItem('color');
	form.fontcsize.value = localStorage.getItem('size');
}