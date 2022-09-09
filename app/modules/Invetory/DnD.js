export default function (ev){
    const draggedImg = document.querySelector(".draggedItemIcon")
    draggedImg.style.top = ev.clientY-27 + "px";
    draggedImg.style.left = ev.clientX-27 + "px";
};