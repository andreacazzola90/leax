"use client"
import Image from "next/image";


import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import MotionWrapper from "../animations/MotionWrapper";


const animations = {
  title: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.4, } },
  },
  content1: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.6, } },
  },
  content2: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.8, } },
  },
  content3: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 1, } },
  },
  content4: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 1.2, } },
  },
  content5: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 1.4, } },
  }
}

const ProcessLeax = () => {
  return (
<section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
     <div className="container">
    <div className="w-full text-white flex flex-col items-center justify-center p-8">
      <MotionWrapper variants={animations.title} >
      <h1 className="text-4xl font-bold pb-11">Processo Leax</h1>
      </MotionWrapper>
      <div className="relative w-full max-w-3xl aspect-square">
        {/* Immagine centrale */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1/3 h-1/3 bg-yellow-400 rounded-full flex items-center justify-center">
            <Image src="/images/light-5.png" alt={""} width={500} height={500} />
          </div>
        </div>
        
        {/* Fasi del processo */}
        <div className="absolute inset-0 md:grid grid-cols- grid-rows-2">
          <div className="col-start-1 row-start-2 md:flex items-center justify-end md:pr-8">
          <MotionWrapper variants={animations.content1} >
            <h2 className="text-xl font-semibold md:text-right">FASE 1: DIAGNOSTICA</h2>
            </MotionWrapper>
          </div>
          <div className="col-start-1 row-start-1 md:flex items-end justify-end md:pr-8 md:pb-8">
          <MotionWrapper variants={animations.content2} >
            <h2 className="text-xl font-semibold md:text-right">FASE 2: ANALISI E OTTIMIZZAZIONE</h2>
            </MotionWrapper>
          </div>
          <div className="col-start-2 row-start-1 md:flex items-center justify-center">
          <MotionWrapper variants={animations.content3} >
            <h2 className="text-xl font-semibold md:text-center">FASE 3: VALUTAZIONE E PROCUREMENT</h2>
            </MotionWrapper>
          </div>
          <div className="col-start-3 row-start-1 md:flex items-end justify-start md:pl-8 md:pb-8">
          <MotionWrapper variants={animations.content4} >
            <h2 className="text-xl font-semibold md:text-left">FASE 4: ENGINEERING</h2>
            </MotionWrapper>
          </div>
          <div className="col-start-3 row-start-2 md:flex items-center justify-start md:pl-8">
          <MotionWrapper variants={animations.content5} >
            <h2 className="text-xl font-semibold md:text-left">FASE 5: FINAL REPORT</h2>
            </MotionWrapper>
          </div>
        </div>
      </div>
    </div>
    </div>
    </section>
  );
};

export default ProcessLeax;
