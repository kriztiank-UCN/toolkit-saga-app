import {call, put, takeEvery} from 'redux-saga/effects';  
import { getCatsSuccess } from './catState';

function* workGetCatsFetch() {
  // yeild = await
 const cats = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'))
 const formattedCats = yield cats.json();
 const formattedCatsShortened = formattedCats.slice(0, 10); 
  yield put(getCatsSuccess(formattedCatsShortened));
}

// Watcher saga
function* catSaga() {
  yield takeEvery('cats/getCatsFetch', workGetCatsFetch);
}

// Export the watcher saga
export default catSaga;