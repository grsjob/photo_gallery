import React, { useState } from "react";
import { StyledPhoto } from "./lazyImgStyles";

interface LazyImgProps {
  src: string;
  author: string;
  id: string;
}

const LazyImg = ({ src, author, id }: LazyImgProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <StyledPhoto
      src={isLoading ? `https://picsum.photos/id/${id}/200/300` : src}
      alt={`Фотография от автора ${author}`}
      onLoad={() => {
        setIsLoading(false);
      }}
    />
  );
};

export default LazyImg;
