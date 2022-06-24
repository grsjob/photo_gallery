import React from "react";
import "../../assets/scss/App.scss";
import PhotosList from "../PhotosList/PhotosList";
import Header from "../Header/Header";
import { useStoreAfterInitialization } from "../../state/storeHooks";
import DataService from "../../services/DataService";
import { store } from "../../state/store";
import { loadingEnd, loadingStart } from "../../state/slices/appSlice";
import {
  addPhotosList,
  toggleForFilterLikes,
} from "../../state/slices/photosListSlice";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import "antd/dist/antd.css";
import Pagination from "../Pagination/Pagination";

const App = () => {
  const { loading } = useStoreAfterInitialization(({ app }) => app, loadApp);
  const antIcon = <LoadingOutlined style={{ fontSize: 38 }} spin />;
  return (
    <div className="app">
      {loading ? (
        <Spin indicator={antIcon} tip="Loading..." />
      ) : (
        <>
          <Header />
          <PhotosList />
          <Pagination />
        </>
      )}
    </div>
  );
};

export default App;

async function loadApp() {
  try {
    store.dispatch(loadingStart());
    const photosList = await DataService.fetchData(100);
    store.dispatch(addPhotosList(photosList));
    store.dispatch(toggleForFilterLikes(photosList));
    store.dispatch(loadingEnd());
  } catch (e) {
    console.log(`Error ${e}`);
  }
}
