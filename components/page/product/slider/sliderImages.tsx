'use client'
// External Libaries
import { FC, useState } from 'react'
// Components
import { Swiper as SwiperParentSlider, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './slider.css'
import Image from 'next/image'
// Types
import type { Swiper } from 'swiper'
type Props = {
  imagesArray: []
}

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Component: FC<Props> = ({ imagesArray }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null)
  
  return (
    <>
	 <div className="swiper-button image-swiper-button-next">
        <IoIosArrowForward />
      </div>
      <div className="swiper-button image-swiper-button-prev">
        <IoIosArrowBack />
      </div>
      <SwiperParentSlider
        spaceBetween={10}
        navigation={{
          nextEl: '.image-swiper-button-next',
          prevEl: '.image-swiper-button-prev',
          disabledClass: 'swiper-button-disabled',
        }}
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
              className="w-full h-[15rem] active:object-contain rounded-md object-cover shadow-md"
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
        modules={[Navigation, Thumbs]}
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
  )
}
export default Component
