import {takeEvery} from 'redux-saga/effects'

import fetchNavData from "./fetchNavData";
import fetchTagData from "./fetchTagData";


function* watchAsync() {
    yield takeEvery('getNavItemsAsync', fetchNavData)
    yield takeEvery('getTagsAsync', fetchTagData)
}


export default function* rootSaga() {
    yield watchAsync()
}