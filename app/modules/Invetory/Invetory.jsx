import React, { Component } from "react";
import playerSvg from './images/player.svg';
import Armor from './images/armor.png';
import {DnDConstructor, DnDDestructor} from './DnD';

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
        DnDConstructor.bind(this)();
        window.kek_swap = (src, dst) => {
            this.props.swapItem(src, dst);
        }
        //this.props.swapItem({name: "armor", dst: 0}, 1);
    }
    componentDidUpdate(){
        console.log("UPDATE")
        DnDDestructor();
        DnDConstructor.bind(this);
    }
    componentWillUnmount(){
        DnDDestructor();
    }
    render() {
        return (
            <div id="inventory">
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
                        {this.props.inventory.map((item, index) => {
                            let elemItem = null;
                            if(item){
                                const imgElem = React.createElement("img", {src:imgagesItem[`${item.name}`], className: "itemImg"})
                                elemItem = React.createElement("div", {className: "item", itemDst: index},imgElem);
                            }
                            const caseItem = React.createElement("div", {className: "inventoryCase", caseId: index}, elemItem);
                            return caseItem;
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