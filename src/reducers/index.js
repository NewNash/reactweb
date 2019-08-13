
const reducer = (state={
    navItems:[],
    tags:[],
    navActive:false
},action)=> {
    switch (action.type) {
        case 'navdata':
            return {...state,navItems:action.navItems }
        case 'tagdata':
            return {...state,tags:action.tags}
        case 'navMouseover':
            return {...state,navActive: true}
        default:
            return {...state}
    }
}

export default reducer