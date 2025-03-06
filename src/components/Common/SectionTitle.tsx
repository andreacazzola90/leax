import MotionWrapper from "../animations/MotionWrapper";

const animations = {
  title: {
    hidden: { opacity: 0, y:50 },
    visible: { opacity: 1, y:0,  transition: { duration: 0.4 ,delay: 0.4,} },
  },
  subTitle: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.8, } },
  }
}
const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (

    <div
      className={`w-full ${center ? "mx-auto text-center" : ""}`}
      style={{ maxWidth: width, marginBottom: mb }}
    >

      <MotionWrapper variants={animations.title} >
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          {title}
        </h2>
      </MotionWrapper>
      <MotionWrapper variants={animations.subTitle} >
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
      </MotionWrapper>


    </div>

  );
};

export default SectionTitle;
