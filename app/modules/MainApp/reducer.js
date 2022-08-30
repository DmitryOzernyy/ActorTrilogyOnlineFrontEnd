function mainApp(state, action){
    if(state === undefined){
        return "chat";
    }

    const render = state.render;

    switch(action.type){
        case "render":
            return action.payload;
        default:
            return state;
    }
}

export default mainApp;