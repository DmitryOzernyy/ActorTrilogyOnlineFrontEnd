import {connect} from "react-redux";
import Chat from "./Chat";

interface State {
    chat,
    render
}

interface listObject {
    type,
    payload
}

function mapStateToProps(state: State) {
    return {
        ChatValues: state.chat,
        render: state.render
    };
}

const add_list_action = (text: string) => {return {type: "add_text", payload: text}};


function mapDispatchToProps(dispatch:fn()){
    return {
        addListValue: function(text: string){
            console.log("add text");
            return dispatch(add_list_action(text));
        }
    };
}

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default connectedComponent;