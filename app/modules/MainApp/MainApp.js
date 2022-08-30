import React, { Component } from "react";
import Chat from '../Chat/App';
import Hud from '../Hud/Hud';

class MainApp extends Component {
    componentDidMount(){
        document.onkeydown = (e) => {
            if(e.keyCode == 84){
                const inputElem = document.getElementById("inputChat");
                if(!inputElem){
                    this.props.renderApp("chat")
                    if(TrilogyOnline) TrilogyOnline.Emit("BrowserActive", "ChatOpen");
                } else if(inputElem && !inputElem.activeElement){
                    this.props.renderApp("hud")
                    if(TrilogyOnline) TrilogyOnline.Emit("BrowserActive", "ChatClose");
                }
                    
            }
        }
    }
    render(){
        switch(this.props.render){
            case "chat":
                return <div><Chat/></div>
            case "hud":
                return <div><Hud /></div>
            default:
                return (<div id="hud">Erorr render</div>);
        }
    }
}

export default MainApp;