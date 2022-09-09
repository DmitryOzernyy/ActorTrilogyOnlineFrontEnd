import React, {Component} from 'react';
import {connect} from 'react-redux';
import Item from './Item.jsx';


class Case extends Component {
    constructor(props){
        super(props);
        this.state = {
            mouseOver: 0
        }
    }

    mouseOverCase({target}){
        if(!target.children.length && target.className == "inventoryCase" && this.props.draggedItem >= 0){
            target.style.background = "white";
            this.props.caseOverSet(this.props.index);
        }
    }

    mouseLeaveCase({target}){
        target.style.background = "";
        this.props.caseOverSet(-1);
    }

    render(){
        if(this.props.item){
            return React.createElement("div", {className: "inventoryCase", caseId: this.props.index}, <Item name={`${this.props.item.name}`} dst={this.props.item.dst}/>);
        } else {
            return React.createElement("div", {className: "inventoryCase", style:{backgroundColor: ""}, caseId: this.props.index, onMouseLeave: this.mouseLeaveCase.bind(this), onMouseOver: this.mouseOverCase.bind(this)}, null);
        }
    }
}

const mapDispatchToProps = (dispatch) => ({
    // this will be injected in child component props
    caseOverSet: (caseId) => dispatch({ type: 'set_case_over', payload: caseId }),
});

const mapStateToProps = (state, ownProps) => {
    return {
        draggedItem: state.inventory.draggedItem,
        index: ownProps.index,
        item: ownProps.item
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Case);