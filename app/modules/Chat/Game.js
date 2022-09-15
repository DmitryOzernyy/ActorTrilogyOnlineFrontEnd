const commandChatTrigger = (text) => {
    if(window.TrilogyOnline){
        if(text[0] === '/'){
            TrilogyOnline.Emit("chatCommand", text);
        } else {
            const cmdObj = {
                cmd: [1, 1, 1],
                text
            };
            TrilogyOnline.Emit("chatSend", JSON.stringify(cmdObj));
        }
        
    }
}

export {commandChatTrigger};