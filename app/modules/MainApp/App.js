import {connect} from "react-redux";
import MainApp from "./MainApp";

function mapStateToProps(state){
    return {
        render: state.render
    };
}

const render_app = (render_name) => 
                    {return {type: "render", payload: render_name}};

function mapDispatchToProps(dispatch){
    return {
        renderApp: function(text){
            
            return dispatch(render_app(text));
        }
    }
}

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(MainApp);

export default connectedComponent;