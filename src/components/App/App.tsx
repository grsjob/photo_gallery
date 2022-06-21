import React from "react";
import "../../assets/scss/App.scss";
import PhotosList from "../PhotosList/PhotosList";
import { useStoreAfterInitialization } from "../../state/storeHooks";
import DataService from "../../services/DataService";
import { store } from "../../state/store";
import { loadingEnd, loadingStart } from "../../state/slices/appSlice";
import { addPhotosList } from "../../state/slices/photosListSlice";

const App = () => {
  const { loading } = useStoreAfterInitialization(({ app }) => app, loadApp);
  return (
    <div className="app">{loading ? <h1>Загрузка</h1> : <PhotosList />}</div>
  );
};

export default App;

async function loadApp() {
  try {
    store.dispatch(loadingStart());
    const photosList = await DataService.fetchData(2, 30);
    store.dispatch(addPhotosList(photosList));
    store.dispatch(loadingEnd());
  } catch (e) {
    console.log(`Error ${e}`);
  }
}
