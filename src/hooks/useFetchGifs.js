import { useEffect, useState } from 'react';
import getGifs from '../helpers/GetGifs';

export default function useFetchGifs(category) {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getImages = async () => {
    const gifts = await getGifs(category);
    setImages(gifts);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
}
