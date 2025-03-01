"use client"
import Image from "next/image";


import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';



const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0 flex items-center justify-center"
              data-wow-delay=".15s"
            >

              <Swiper
                slidesPerView={1}
                direction="horizontal"
                modules={[Navigation,Autoplay]}
                spaceBetween={0}
                autoplay
                navigation
              >
                <SwiperSlide><Image
                  src="/images/VIDEOISPEZIONE_2.png"
                  alt="about image"
                  width={600} height={600}
                  className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
                /> </SwiperSlide>
                <SwiperSlide><Image
                  src="/images/VIDEOISPEZIONE_3.png"
                  alt="about image"
                  width={600} height={600}
                  className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
                /> </SwiperSlide>
                <SwiperSlide><Image
                  src="/images/VIDEOISPEZIONE_4.png"
                  alt="about image"
                  width={600} height={600}
                  className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
                /> </SwiperSlide>

               
              </Swiper>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Bug free code
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Utilizziamo tecnologie all'
                  avanguardia per il
                  monitoraggio in tempo reale e la gestione
                  delle perdite.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Premier support
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Ci occupiamo di collaudi di
                  nuove condotte nonché di manutenzione
                  programmata e valutazioni dettagliate dello
                  status delle tubazioni, garantendo un
                  servizio completo end to end.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
