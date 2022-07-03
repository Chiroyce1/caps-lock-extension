const icon = document.createElement('span');
icon.style.backgroundColor = "black";
icon.style.color = "red";
icon.style.padding = "0.5em";
icon.style.borderRadius = "3px";
icon.style.zIndex = 9999999999;
icon.innerText = "Don't forget to turn off caps lock!";

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
