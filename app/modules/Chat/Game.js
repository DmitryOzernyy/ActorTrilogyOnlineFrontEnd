const commandChatTrigger = (text) => {
    if(window.TrilogyOnline){
        if(text[0] === '/'){
            TrilogyOnline.Emit("chatCommand", text);
        } else {
            TrilogyOnline.Emit("chatSend", text);
        }
        
    }
}

export {commandChatTrigger};