import React, { useEffect, useRef, useState } from "react";
import { StyledPhoto, StyeldPhotoBlur } from "./lazyImgStyles";

interface LazyImgProps {
  src: string;
  author: string;
  id: string;
}

const LazyImg = ({ src, author, id }: LazyImgProps) => {
  const [loading, setLoading] = useState(true);

  return (
    <StyledPhoto
      src={loading ? `https://picsum.photos/id/${id}/200/300` : src}
      alt={`Фотография от автора ${author}`}
      onLoad={() => {
        setLoading(false);
      }}
    />
  );
};

export default LazyImg;
