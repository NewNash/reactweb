
const reducer = (state={
    navItems:[],
    tags:[],
    articles:{content:[],},
    navActive:''
},action)=> {
    switch (action.type) {
        case 'navdata':
            return {...state,navItems:action.navItems }
        case 'tagdata':
            return {...state,tags:action.tags}
        case 'navMouseover':
            return {...state,navActive: action.activeItem}
        case 'navMouseOut':
            return {...state,navActive: ''}
        case 'articledata':
            return {...state,articles:action.articles}
        default:
            return {...state}
    }
}

export default reducer