import React, { Component } from "react";
import { commandChatTrigger } from "./Game";


class Chat extends Component {
    constructor(props) {
        super(props);
        this.value = ""
        this.sendClick = this.sendClick.bind(this);
    }

    componentDidUpdate() {
        console.log(this.value);
        window.Chat = {
            pushToChat: (text) => {
                this.props.addListValue(text);
            }
        }
    }
    sendClick() {
        const inputElem = document.getElementById("inputChat");
        let value = this.value;
        if (inputElem !== undefined) {
            inputElem.value = "";
            this.value = "";
        }
        commandChatTrigger(value);
        return this.props.addListValue(value);
    }

    render() {
        console.log(this);
        return (
            <div>
                <div id="Chat">
                    {this.props.ChatValues.map((text, index, array) => {
                        if (array.length - index <= 9)
                            return <span className="messageChat" key={`${index}-message`}>{text}</span>
                    })
                    }
                </div>
                <input id="inputChat"
                    type="text"
                    onBlur={(e) => e.target.activeElement = false}
                    onFocus={(e) => e.target.activeElement = true}
                    onChange={(e) => this.value = e.target.value}>
                </input>
                <button id="inputButton" onClick={this.sendClick}>Send</button>
            </div>
        )
    }
}

export default Chat;