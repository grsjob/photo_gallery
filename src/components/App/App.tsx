import React from "react";
import "../../assets/scss/App.scss";
import CaractersList from "../CaractersList/CaractersList";
import { useStoreAfterInitialization } from "../../state/storeHooks";
import DataService from "../../services/DataService";
import { store } from "../../state/store";
import { loadingEnd, loadingStart } from "../../state/slices/appSlice";
import { addCharacters } from "../../state/slices/charactersSlice";

const App = () => {
  const { loading } = useStoreAfterInitialization(({ app }) => app, loadApp);
  return (
    <div className="app">{loading ? <h1>Загрузка</h1> : <CaractersList />}</div>
  );
};

export default App;

async function loadApp() {
  try {
    store.dispatch(loadingStart());
    const characters = await DataService.fetchData();
    store.dispatch(addCharacters(characters));
    store.dispatch(loadingEnd());
  } catch (e) {
    console.log(`Error ${e}`);
  }
}
