function inventory(state, action){
    if(state === undefined){
        const arr = new Array(54).fill(0);
        arr[0] = {name: "armor", dst: 0};
        return {cases: arr, draggedItem: -1, caseOver: -1};
    }

    const inventory = state.cases;

    switch(action.type){
        case "swap_item": {
            const {src, dst} = action.payload;
            if(dst === -1 && inventory[src]) {
                inventory[src] = 0;
                return {...state, cases: [...inventory]};
            }
            if(!inventory[src]) return {...state, cases: [...inventory]};
            console.log(src,dst);
            const item = inventory[src];
            console.log(item);
            inventory[src] = 0;
            item.dst = dst;
            console.log(item);
            inventory[dst] = item;
            console.log(inventory);
            return {...state, cases: [...inventory]};
        }
        case "set_dragged_item":
            const item = action.payload;
            return {...state, draggedItem: item}; 
        case "set_case_over":
            const caseId = action.payload;
            return {...state, caseOver: caseId};
        default:
            return state;
    }

}

export default inventory;