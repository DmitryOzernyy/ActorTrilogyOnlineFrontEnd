function mouseOverEmptyCases(ev){

}

function DnDConstructor(){
    console.log("Dnd constructor");
    let draggedItem = undefined;
    let casesOver = undefined;
    console.log(this.props);
    const items = document.getElementsByClassName("item");
    const cases = document.querySelectorAll(".inventoryCase");
    for(let i = 0; i < cases.length; i++){
        cases[i].addEventListener("mouseover", ({target})=>{
            if(!target.children.length && target.className == "inventoryCase") {
                target.style.background = "white"
                casesOver = target;
            };
        })
        cases[i].addEventListener("mouseleave", ({target})=>{
            target.style.background = "";
            casesOver= undefined;
        })
    }
    document.getElementById("app").onmouseup = (elem)=>{
        console.log("UP");
        console.log(casesOver.getAttribute("caseId"), draggedItem.getAttribute("itemDst"));
        this.props.swapItem(draggedItem.getAttribute("itemDst"), casesOver.getAttribute("caseId"));
        draggedItem.remove();
    }
    for(let i = 0; i < items.length; i++){
        console.log(items[i]);
        items[i].addEventListener("mousedown", (ev)=>{
            ev.preventDefault();
            console.log(items[i].children);
            draggedItem = items[i].cloneNode(true);
            console.log(draggedItem);
            document.body.appendChild(draggedItem);
            
 
        }, {passive: false})

    }
}

function DnDDestructor(){
    console.log("Dnd destructor");
}


export {DnDConstructor, DnDDestructor};