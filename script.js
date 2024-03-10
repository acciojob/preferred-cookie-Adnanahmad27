//your JS code here. If required.
const form = document.querySelector('form');
form.addEventListener('submit' , (e)=>{
	e.preventDefault();
	let fontcolor = form.fontcolor.value;
	let fontsize = form.fontsize.value;
	document.cookie = `color=${fontcolor}`;
	document.cookie = `size=${fontsize}`;
});

window.onload = () => {
    let cookies = document.cookie;
    let colorCookie = cookies.find(cookie => cookie.startsWith('color='));
    let sizeCookie = cookies.find(cookie => cookie.startsWith('size='));
    if(colorCookie && sizeCookie){
        let color = colorCookie.split('=')[1];
        let size = sizeCookie.split('=')[1];
        form.fontcolor.value = color;
        form.fontsize.value = size;
        document.documentElement.style.setProperty('--fontcolor', color);
        document.documentElement.style.setProperty('--fontsize', `${size}px`);
    }
};