import React, { Component } from "react";
import Chat from '../Chat/App';
import Hud from '../Hud/Hud';
import Invetory from "../Invetory/App";

class MainApp extends Component {
    componentDidMount(){
        const app = document.getElementById("app");
        app.style.height = window.innerHeight + "px";
        app.style.width = window.innerWidth + "px";
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
            if(e.keyCode == 9){
                const inventory = document.getElementById("inventory");
                console.log(this.props);
                if(!inventory){
                    this.props.renderApp("inventory");
                    if(TrilogyOnline) TrilogyOnline.Emit("BrowserActive", "InventoryOpen");
                } else {
                    this.props.renderApp("hud");
                    if(TrilogyOnline) TrilogyOnline.Emit("BrowserActive", "InventoryClose");
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
            case "inventory":
                return <Invetory />;
            default:
                return (<div id="hud">Erorr render</div>);
        }
    }
}

export default MainApp;