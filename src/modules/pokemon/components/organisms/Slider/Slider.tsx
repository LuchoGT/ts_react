import './Slider.scss';
import { useSlider } from './useSlider';

export const Slider = ():JSX.Element => {

  const {listImages,listAlts} = useSlider();

  return (
    <div className="slider">
      <ul className="slider__list">
        {
          listImages.map((item,index)=>(
            <li key={index} className='slider__item'>
              <img src={item} alt={listAlts[index]} className='slider__image' />
            </li>
          ))
        }
        {/* <li className="slider__item">
          <img
            src="https://cdn-sliders.eneba.com/resized/5iSeKq2LJBUzMUdkVoCTdMCutPlqILpENInaXO-eot8_200x400_1x-200x400_1800_0.jpg"
            alt="Image 1"
            className="slider__image"
          />
        </li>
        <li className="slider__item">
          <img
            src="https://cdn-sliders.eneba.com/resized/R6LtqE1GaK-xF7H5BjDMcw7ACBIaTQJJZOC9_e2790s_200x400_1x-200x400_1800_0.jpg"
            alt="Image 1"
            className="slider__image"
          />
        </li>
        <li className="slider__item">
          <img
            src="https://cdn-sliders.eneba.com/resized/JOlcgKOnYfbeHMami3z1uqTZ97EfX0bG92t3jlrkBiA_200x400_1x-200x400_1800_0.jpg"
            alt="Image 1"
            className="slider__image"
          />
        </li>
        <li className="slider__item">
          <img
            src="https://cdn-sliders.eneba.com/resized/Cmn4F2oFtFsm3oFmFFO41_NdjES2wUuqzWxfORfebc0_200x400_1x-200x400_1800_0.jpg"
            alt="Image 1"
            className="slider__image"
          />
        </li> */}
      </ul>
    </div>
  );
};
