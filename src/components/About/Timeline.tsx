"use client"
import Image from "next/image";


import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import MotionWrapper from "../animations/MotionWrapper";

const animations = {
  title: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.4, } },
  }
}

const Timeline = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd" />
              </svg>
            </div>
            
            <div className="timeline-start mb-10 md:text-end text-body-color">
            <MotionWrapper variants={animations.title} >
              <div className="text-lg text-black dark:text-white">RICERCA PERDITE IDRICHE</div>
              Ricerca perdite di acqua nelle reti
              antincendio, di teleriscaldamento e di
              distribuzione interna degli stabilimenti.
              </MotionWrapper>
            </div>
            
            <hr />
            
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd" />
              </svg>
            </div>
            <div className="timeline-end md:mb-10 text-body-color">
            <MotionWrapper variants={animations.title} >
              <div className="text-lg text-black dark:text-white">COLLAUDO TUBAZIONI</div>
              Collaudo tubazioni dalla prova in
              pressione iniziale fino al buon esito in
              ottica end to end.
              </MotionWrapper>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd" />
              </svg>
            </div>
            <div className="timeline-start mb-10 text-body-color md:text-end">
            <MotionWrapper variants={animations.title} >
              <div className="text-lg text-black dark:text-white">RICERCA PERDITE GAS</div>
              Ricerca perdite di gas tecnici nelle reti
              come azoto, aria compressa, ossigeno,
              argon, idrogeno ed altri.
              </MotionWrapper>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd" />
              </svg>
            </div>
            <div className="timeline-end md:mb-10 text-body-color">
            <MotionWrapper variants={animations.title} >
              <div className="text-lg text-black dark:text-white">PROVE DI TENUTA VASCHE</div>
              Test per verificare integrità e assenza
              di perdite in vasche, serbatoi, cisterne.
              </MotionWrapper>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd" />
              </svg>
            </div>
            <div className="timeline-start mb-10 text-body-color md:text-end">
            <MotionWrapper variants={animations.title} >
              <div className="text-lg text-black dark:text-white">VIDEOISPEZIONI</div>
              Ispezione visiva di tubazioni, condotte
              pozzi, canali e altri sistemi di raccolta e
              trasporto di liquidi o gas.
              </MotionWrapper>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd" />
              </svg>
            </div>
            <div className="timeline-end md:mb-10 text-body-color">
            <MotionWrapper variants={animations.title} >
              <div className="text-lg text-black dark:text-white">RISANAMENTO TUBAZIONI</div>
              Risanamento no dig tramite relining
              interno con resine apposite.
              </MotionWrapper>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd" />
              </svg>
            </div>
            <div className="timeline-start mb-10 text-body-color md:text-end">
            <MotionWrapper variants={animations.title} >
              <div className="text-lg text-black dark:text-white">MANUTENZIONE</div>
              Contratti di manutenzione ordinaria per il
              mantenimento degli asset aziendali
              dopo il primo risanamento.
              </MotionWrapper>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Timeline;
