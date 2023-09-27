import { useEffect, useState } from "react";

export const useSlider = () => {
  const [listImages, setListImages] = useState<Array<string>>([]);
  const [listAlts, setListAlts] = useState<Array<string>>([]);
  useEffect(() => {
    setListImages([
        "https://cdn-sliders.eneba.com/resized/5iSeKq2LJBUzMUdkVoCTdMCutPlqILpENInaXO-eot8_200x400_1x-200x400_1800_0.jpg",
        "https://cdn-sliders.eneba.com/resized/R6LtqE1GaK-xF7H5BjDMcw7ACBIaTQJJZOC9_e2790s_200x400_1x-200x400_1800_0.jpg",
        "https://cdn-sliders.eneba.com/resized/JOlcgKOnYfbeHMami3z1uqTZ97EfX0bG92t3jlrkBiA_200x400_1x-200x400_1800_0.jpg",
        "https://cdn-sliders.eneba.com/resized/Cmn4F2oFtFsm3oFmFFO41_NdjES2wUuqzWxfORfebc0_200x400_1x-200x400_1800_0.jpg",
        "https://cdn-sliders.eneba.com/resized/Cmn4F2oFtFsm3oFmFFO41_NdjES2wUuqzWxfORfebc0_200x400_1x-200x400_1800_0.jpg",
    ]);
    setListAlts(["Image 1", "Image 2", "Image 3", "Image 4"])
  }, [])
  
  return {
    listImages,
    listAlts,
  };
};
