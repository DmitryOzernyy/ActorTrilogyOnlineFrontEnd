import React, {Component} from 'react';
import {connect} from 'react-redux';
import Armor from './images/armor.png';
const imgagesItem = {
    armor: Armor,
}


class Item extends Component{
    handleItemMouseDown(ev){
        ev.preventDefault();
        this.props.draggedItemSet(this.props.dst);
        const app = document.querySelector("#app");
        const draggedImg = document.querySelector(".draggedItemIcon");
        app.onmousemove= ev =>{
            draggedImg.style.top = ev.clientY-27 + "px";
            draggedImg.style.left = ev.clientX-27 + "px";
        }
    }
    render(){
        const imgElem = React.createElement("img", {src:imgagesItem[`${this.props.name}`], className: "itemImg"})
        const elemItem = React.createElement("div", {className: "item", itemDst: this.props.dst, onMouseDown: this.handleItemMouseDown.bind(this)},imgElem);
        return elemItem;
    }
}

const mapDispatchToProps = (dispatch) => ({
    // this will be injected in child component props
    draggedItemSet: (item) => dispatch({ type: 'set_dragged_item', payload: item }),
});

export default connect(null, mapDispatchToProps)(Item);