const icon = document.createElement('span');
icon.style.backgroundColor = "#121212";
icon.style.color = "#FFCC00";
icon.style.padding = "0.8em";
icon.style.borderRadius = "5px";
icon.style.zIndex = 9999999999;
icon.innerText = "Don't forget to turn off caps lock!";
icon.style.fontFamily = "Noto Sans, sans-serif";
icon.style.position = "fixed";
icon.style.top = "0";
icon.style.left = "0";
icon.style.margin = "1em";
icon.style.cursor = "pointer";

document.body.appendChild(icon);

icon.onclick = () => icon.style.display = "none";

document.addEventListener('keydown', (event) => {
    if (event.getModifierState('CapsLock')) {
        icon.style.display = "block";
    } else {
        icon.style.display = "none";
    }
});