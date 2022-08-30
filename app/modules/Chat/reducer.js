function chat(state, action){
    if(state === undefined){
        return  ["test1", "test2", "test4", "test5", "test6", "test7", "test8","test9","test10","test11"];
    }

    const chat = state.chat;

    switch(action.type){
        case "add_text":
            return [...state, action.payload];
        default:
            return state;
    }
}

export default chat;