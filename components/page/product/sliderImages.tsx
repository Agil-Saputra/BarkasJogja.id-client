'use client';
// External Libaries
import { FC, useState } from 'react';
// Components
import { Swiper as SwiperParentSlider, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
// Types
import type { Swiper } from 'swiper';
type Props = {
  imagesArray: [];
};



const Component: FC<Props> = ({ imagesArray }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null);
  return (
    <>
      <SwiperParentSlider
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {imagesArray.map((image: any, i: number) => (
          <SwiperSlide>
            <Image
              key={i}
              src={image.attributes.url}
              width={400}
              height={400}
              className="w-full h-[15rem] object-contain rounded-md bg-primary shadow-md"
              alt={image.attributes.url}
            />
          </SwiperSlide>
        ))}
      </SwiperParentSlider>
      <SwiperParentSlider
        onSwiper={setThumbsSwiper}
        freeMode={true}
        watchSlidesProgress={true}
        slidesPerView={4}
        spaceBetween={5}
        modules={[ Navigation, Thumbs]}
        className="mt-1 mySwiper"
      >
        {imagesArray.map((image: any, i: number) => (
          <SwiperSlide>
            <Image
              key={i}
              src={image.attributes.url}
              width={400}
              height={400}
              className="w-full h-[5rem] object-cover rounded-md bg-slate-200"
              alt={image.attributes.url}
            />
          </SwiperSlide>
        ))}
      </SwiperParentSlider>
    </>
  );
};
export default Component;
