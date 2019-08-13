import {put} from 'redux-saga/effects'
import axios from 'axios'

export default function* fetchTagData() {
    let tagData
    yield axios.get('https://neveralone.cn/api/tagList').then((result) => {
        tagData = result.data
    })
        .catch((error) => {
            console.log(error)
            tagData=[]
        })
    yield put({type: 'tagdata', tags: tagData})
}

