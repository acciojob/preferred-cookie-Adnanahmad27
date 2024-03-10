const form = document.querySelector("form");
 
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const fontsize = document.querySelector("#fontsize").value;
  const fontcolor = document.querySelector("#fontcolor").value;
  document.documentElement.style.setProperty("--fontsize", ${fontsize}px);
  document.documentElement.style.setProperty("--fontcolor", ${fontcolor});
  document.cookie = fontsize=${fontsize};max-age=31536000;
  document.cookie = fontcolor=${fontcolor};max-age=31536000;
});
 
const cookieString = document.cookie;
const cookies = cookieString.split(";");
for (const cookie of cookies) {
  const [name, value] = cookie.split("=");
  if (name.trim() === "fontsize") {
    document.documentElement.style.setProperty("--fontsize", ${value}px);
  } else if (name.trim() === "fontcolor") {
    document.documentElement.style.setProperty("--fontcolor", ${value});
  }
}
// //your JS code here. If required.
// const form = document.querySelector('form');
// const size = document.getElementById('fontsize');
// const color = document.getElementById('fontcolor');


// size.addEventListener('change' , () => {
	
// })
// form.addEventListener('submit',(e)=>{
// 	e.preventDefault();
// 	let fontcolor = form.fontcolor.value;
// 	let fontsize = form.fontsize.value;
// 	document.cookie = `color=${fontcolor}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
// 	document.cookie = `size=${fontsize}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
// 	document.documentElement.style.setProperty('--fontcolor', fontcolor);
//     document.documentElement.style.setProperty('--fontsize', `${fontsize}px`);
// });
// window.onload = () => {
//     let cookies = document.cookie.split('; ');
//     let colorCookie = cookies.find(cookie => cookie.startsWith('color='));
//     let sizeCookie = cookies.find(cookie => cookie.startsWith('size='));
//     if(colorCookie && sizeCookie){
//         let color = colorCookie.split('=')[1];
//         let size = sizeCookie.split('=')[1];
//         form.fontcolor.value = color;
//         form.fontsize.value = size;
//         document.documentElement.style.setProperty('--fontcolor', color);
//         document.documentElement.style.setProperty('--fontsize', `${size}px`);
//     }
// };
