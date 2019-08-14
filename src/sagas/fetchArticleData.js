import { put} from 'redux-saga/effects'
import axios from 'axios'

export default function* fetchNavData() {
    let articles
    yield  axios.get('https://neveralone.cn/api/articleList?type=main&pages=1&skip=0&oneReqNumber=10').then((result) => {
        articles = result.data
    })
        .catch((error) => {
            console.log(error)
            articles = []
        })
    yield put({type: 'articledata', articles:articles})
}
