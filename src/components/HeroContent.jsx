import Btn from "./Btn";

const HeroContent = () => {
  return (
    <section data-aos="fade-up" className="mx-auto py-4 sm:py-4 lg:py-4  relative w-full h-full flex justify-center items-center">
  <div className="text-center ">
    <h1
      className="heading   tracking-wide  font-bold text-gray-800  text-4xl md:text-6xl pb-2 leading-1"
    >
      Turn your D2C vision into reality.<br/> Join me on the journey.
    </h1>
    <h2 className="w-5/6 mx-auto mt-2 text-gray-600 sm:text-xl font-medium">
    Get industry secrets, expert guidance, and supercharge your D2C growth with Darsheel Savla's new consultancy program.
    </h2>
    <div className="mt-4 flex items-center justify-center gap-x-6">
       <Btn text={"Join the Growth Movement"}  link={"#projects"} customClasses={"text-lg mt-1"}/>
    </div>
  </div>
</section>
  )
}

export default HeroContent

