import { all } from 'redux-saga/effects';
import activities from './activities';

function* rootSaga() {
    return yield all([
        ...activities()
    ]);
}

export default rootSaga;
