const initialState = {
    isopen : false,
    isback : false
}

const reducer = (state = initialState , action) =>{
    switch(action.type){
        case 'close':
            return{ isopen : false}           
        case 'open':
            return {isopen : true}
        case 'openback':
                return{isback : true}
        case 'closeback':
                return{isback : false}
        default :
        return state
    }
    
    

}

export default reducer;