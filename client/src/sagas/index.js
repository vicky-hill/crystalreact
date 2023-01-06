import { takeEvery } from 'redux-saga/effects';

function* workerSaga() {

}

// Watcher saga
function* mySaga() {
    takeEvery("HELLO", workerSaga)
}

export default mySaga;