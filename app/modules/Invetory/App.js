import {connect} from "react-redux";
import Invetory from "./Invetory.jsx";

function mapStateToProps(state) {
    return {
        render: state.render,
        inventory: state.inventory
    };
}

const spaw_item_action = (src, dst) => {return {type: "swap_item", payload: {src, dst}}}


function mapDispatchToProps(dispatch){
    return {
        swapItem: function(src, dst){
            return dispatch(spaw_item_action(src, dst));
        }
    };
}

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Invetory);

export default connectedComponent;