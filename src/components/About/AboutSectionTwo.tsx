"use client"
import Image from "next/image";


import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import MotionWrapper from "../animations/MotionWrapper";

const animations = {
  title: {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.4, } },
  },
  subTitle: {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.8, } },
  }
}

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
                modules={[Navigation, Autoplay]}
                spaceBetween={0}
                autoplay
                navigation
              >
                <SwiperSlide>

                  <Image
                    src="/images/VIDEOISPEZIONE_2.png"
                    alt="about image"
                    width={600} height={600}
                    className="hidden drop-shadow-three dark:block dark:drop-shadow-none rounded-md"
                  />

                </SwiperSlide>
                <SwiperSlide>

                  <Image
                    src="/images/VIDEOISPEZIONE_3.png"
                    alt="about image"
                    width={600} height={600}
                    className="hidden drop-shadow-three dark:block dark:drop-shadow-none rounded-md"
                  />
                </SwiperSlide>
                <SwiperSlide>

                  <Image
                    src="/images/VIDEOISPEZIONE_4.png"
                    alt="about image"
                    width={600} height={600}
                    className="hidden drop-shadow-three dark:block dark:drop-shadow-none rounded-md"
                  />

                </SwiperSlide>


              </Swiper>


            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <MotionWrapper variants={animations.title} >
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Lavorazioni specializzate
                  </h3>
                </MotionWrapper>
                <MotionWrapper variants={animations.subTitle} >
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Utilizziamo tecnologie all'
                    avanguardia per il
                    monitoraggio in tempo reale e la gestione
                    delle perdite. Ci occupiamo di collaudi di
                    nuove condotte nonché di manutenzione
                    programmata e valutazioni dettagliate dello
                    status delle tubazioni, garantendo un
                    servizio completo end to end.
                  </p>
                </MotionWrapper>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default AboutSectionTwo;
