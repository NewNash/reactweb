
const reducer = (state={
    navItems:[1,2,3,4]
},action)=> {
    if(action.type==='onload'){
        console.log(action.text)
        return {...state}
    }
    return {...state}
}

export default reducer