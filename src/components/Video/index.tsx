"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";



const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-48">
      <div className="container">

        
        <SectionTitle
          title="Chi siamo"
          paragraph="LEAX è un’azienda di servizi specializzata nella ricerca perdite
e nel risanamento di reti private. Ci affianchiamo al cliente
per offrire una consulenza su problematiche verticali al fine
di valutare insieme varie casistiche di risoluzione.
Professionalità, affidabilità ed innovazione sono i nostri punti
di forza. Operiamo in tutta Italia grazie ad una rete solida di
partner storici."
          center
          mb="80px"
        />

      </div>

      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
