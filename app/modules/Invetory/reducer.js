function inventory(state, action){
    if(state === undefined){
        const arr = new Array(54).fill(0);
        arr[0] = {name: "armor", dst: 0};
        return arr;
    }

    const inventory = state;

    switch(action.type){
        case "swap_item":
            const {src, dst} = action.payload;
            if(dst === -1 && inventory[src]) {
                inventory[src] = 0;
                return [...inventory];
            }
            if(!inventory[src]) return [...inventory];
            console.log(src,dst);
            const item = inventory[src];
            console.log(item);
            inventory[src] = 0;
            item.dst = dst;
            console.log(item);
            inventory[dst] = item;
            console.log(inventory);
            return [...inventory]; 
        default:
            return state;
    }

}

export default inventory;