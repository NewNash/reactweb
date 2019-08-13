import { put} from 'redux-saga/effects'
import axios from 'axios'

export default function* fetchNavData() {
    let navItems
    yield  axios.get('https://neveralone.cn/api/getCategory').then((result) => {
        navItems = result.data
    })
        .catch((error) => {
            console.log(error)
            navItems = []
        })
    yield put({type: 'navdata', navItems: navItems})
}
