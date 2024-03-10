//your JS code here. If required.
const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
	e.preventDefault();
	let fontcolor = form.fontcolor.value;
	let fontsize = form.fontsize.value;
	document.cookie = `color=${fontcolor}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
	document.cookie = `size=${fontsize}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
	document.documentElement.style.setProperty('--fontcolor', fontcolor);
        document.documentElement.style.setProperty('--fontsize', `${fontsize}px`);
});
window.onload = () => {
    let cookies = document.cookie.split('; ');
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
