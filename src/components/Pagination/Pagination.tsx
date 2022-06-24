import React, { useEffect, useMemo, useState } from "react";
import { useStore } from "../../state/storeHooks";
import { IPhotos } from "../../types/photosList";
import { store } from "../../state/store";
import {
  setCurrentPage,
  setCurrentPhotosAfterPagination,
  setPageNumbers,
} from "../../state/slices/paginationSlice";
import { Button } from "antd";
import { StyledPaginationList } from "./paginationStyles";

const Pagination = () => {
  const { currentPhotosList } = useStore(({ photosList }) => photosList);
  const { currentPage, pagesNumbers } = useStore(
    ({ pagination }) => pagination,
  );
  const [photosPerPage, setPhotosPerPage] = useState(10);

  const lastPhotoIndex = useMemo(() => {
    return currentPage * photosPerPage;
  }, [currentPage, photosPerPage]);
  const firstPhotoIndex = useMemo(() => {
    return lastPhotoIndex - photosPerPage;
  }, [lastPhotoIndex, photosPerPage]);

  useEffect(() => {
    setPhotosSlice(
      currentPhotosList,
      firstPhotoIndex,
      lastPhotoIndex,
      pagesNumbers,
    );
    const pagesNumbersArray = [];
    for (
      let i = 1;
      i <= Math.ceil(currentPhotosList.length / photosPerPage);
      i++
    ) {
      pagesNumbersArray.push(i);
    }
    store.dispatch(setPageNumbers(pagesNumbersArray));
  }, [
    currentPhotosList,
    currentPage,
    firstPhotoIndex,
    lastPhotoIndex,
    photosPerPage,
  ]);
  return (
    <nav>
      <StyledPaginationList>
        {pagesNumbers.map((number) =>
          number === currentPage ? (
            <li key={number}>
              <Button
                type="primary"
                onClick={() => store.dispatch(setCurrentPage(number))}
              >
                {number}
              </Button>
            </li>
          ) : (
            <li key={number}>
              <Button onClick={() => store.dispatch(setCurrentPage(number))}>
                {number}
              </Button>
            </li>
          ),
        )}
      </StyledPaginationList>
    </nav>
  );
};

export default Pagination;

function setPhotosSlice(
  photos: IPhotos[],
  firstPhotoIndex: number,
  lastPhotoIndex: number,
  pagesNumbers: number[],
) {
  const slice = photos.slice(firstPhotoIndex, lastPhotoIndex);

  if (slice && slice.length !== 0) {
    store.dispatch(setCurrentPhotosAfterPagination(slice));
  }
  if (slice.length === 0) {
    store.dispatch(setCurrentPhotosAfterPagination([]));
    store.dispatch(setCurrentPage(pagesNumbers.length));
  }
}
