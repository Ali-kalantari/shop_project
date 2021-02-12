const initialState = {
    isopen : false,
    user_orders:[]
}

const reducer = (state = initialState , action) =>{
    switch(action.type){
        case 'close':
            return{ isopen : false}           
        case 'open':
            return {isopen : true}
        default :
        return state
    }
    

}

export default reducer;