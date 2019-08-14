import {takeEvery} from 'redux-saga/effects'

import fetchNavData from "./fetchNavData";
import fetchTagData from "./fetchTagData";
import fetchArticleData from "./fetchArticleData";

function* watchAsync() {
    yield takeEvery('getNavItemsAsync', fetchNavData)
    yield takeEvery('getTagsAsync', fetchTagData)
    yield takeEvery('getArticleAsync',fetchArticleData)
}


export default function* rootSaga() {
    yield watchAsync()
}