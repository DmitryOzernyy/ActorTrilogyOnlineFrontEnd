import React, { Component } from "react";
import playerSvg from './images/player.svg';
import Case from './Case.jsx';
import DnD from './DnD';
import Armor from './images/armor.png';

const imgagesItem = {
    armor: Armor,
}

class Invetory extends Component {
    
    componentDidMount() {
        const height = window.innerHeight;
        const width = window.innerWidth;
        const inventoryDOM = document.getElementById("inventory");
        inventoryDOM.style.marginTop = `${(height - 890) / 2}px`;
        inventoryDOM.style.marginLeft = `${(width - 1610) / 2}px`;
        window.kek_swap = (src, dst) => {
            this.props.swapItem(src, dst);
        }
        const draggedImg = document.querySelector(".draggedItemIcon");
        const app = document.querySelector("#app");
        app.onmouseup = (elem)=>{
            console.log(this);
            const {draggedItem, caseOver} = this.props.inventory;
            if(draggedItem >= 0 && caseOver >= 0){
                app.onmousemove = null;
                draggedImg.style.top = -100 + "px";
                draggedImg.style.left = -100 + "px";
                this.props.draggedItemSet(-1);
                this.props.swapItem(draggedItem, caseOver);
                console.log(this.props);
                
                //app.removeEventListener("onmousemove", DnD)

                
            }
            
            /*
            console.log(casesOver.getAttribute("caseId"), draggedItem.getAttribute("itemDst"));
            this.props.swapItem(draggedItem.getAttribute("itemDst"), casesOver.getAttribute("caseId"));
            draggedItem.remove();
            */
        }

    }   

    componentWillUnmount(){
        DnDDestructor();
    }
    render() {
        return (
            <div id="inventory">
                <img className="draggedItemIcon" src={imgagesItem[/*`${this.props.inventory.cases[this.props.inventory.draggedItem].name}`*/ 'armor']}/>
                <div class="externalItems">
                    <div class="titleExternalItems"> <span>TITLE</span></div>
                    <div class="externalItemCase">1.1</div>
                    <div class="externalItemCase">1.2</div>
                    <div class="externalItemCase">1.3</div>
                    <div class="externalItemCase">1.4</div>
                    <div class="externalItemCase">1.5</div>
                    <div class="externalItemCase">1.6</div>
                </div>
                <div class="playerItems">
                    <div class="imgSvg">
                        <span class="titleImgSvg">TITLE</span>
                        <img class="playerSvgImg" src={playerSvg} alt="" />
                        <div class="faceCover"><span>FACE COVER</span>
                            <div class="faceCoverCase"></div>
                        </div>
                        <div class="onSling"><span>ON SLING</span>
                            <div class="onSlingCase"></div>
                        </div>
                        <div class="bodyArmor"><span>BODY ARMOR</span>
                            <div class="bodyArmorCase"></div>
                        </div>
                    </div>
                    <div class="inventoryCasesBacground"></div>
                    <span class="inventoryTitle">TITLE</span>
                    <div class="invetnoryCases">
                        {this.props.inventory.cases.map((item, index) => {
                            /*
                            let elemItem = null;
                            if(item){
                                const imgElem = React.createElement("img", {src:imgagesItem[`${item.name}`], className: "itemImg"})
                                elemItem = React.createElement("div", {className: "item", itemDst: index},imgElem);
                            }
                            const caseItem = React.createElement("div", {className: "inventoryCase", caseId: index}, elemItem);
                            */
                            return <Case item={item} index={index}/>;
                            /*
                            if (item)
                                return <div class="inventoryCase"> <div class="item"> <img class="itemImg" src={imgagesItem[`${item.name}`]} alt="" /></div></div>
                            else 
                                return <div class="inventoryCase"> </div>
                            */
                        })}
                       
                    </div>
                </div>
            </div>
        )
    }
}

export default Invetory;