import {connect} from "react-redux";
import Chat from "./Chat";

function mapStateToProps(state) {
    return {
        ChatValues: state.chat,
        render: state.render
    };
}

const add_list_action = (text) => {return {type: "add_text", payload: text}};


function mapDispatchToProps(dispatch){
    return {
        addListValue: function(text){
            console.log("add text");
            return dispatch(add_list_action(text));
        }
    };
}

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default connectedComponent;