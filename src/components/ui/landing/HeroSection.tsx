
const HeroSection = () => {

  return (
    <div className="w-full">
      <div className="relative flex flex-col items-center py-20 rounded-lg">
        <img className="absolute top-0 right-0 mt-2 mr-2 lg:mr-12 lg:mt-12" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg2.svg" alt="bg" />
        <img className="absolute bottom-0 left-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg3.svg" alt="bg" />
        <div className="w-11/12 sm:w-2/3 ">
          <h1 className="text-2xl font-bold leading-tight text-center text-white sm:text-3xl md:text-4xl lg:text-5xl">For the happiness of others.</h1>
        </div>
        <div className="flex items-center justify-center py-8">
          <a href="#how-it-works" className="px-4 py-1 ml-3 text-sm text-white transition duration-150 ease-in-out bg-transparent border border-white rounded hover:text-primary lg:text-xl hover:border-primary sm:ml-6 focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700 focus:ring-white hover:bg-indigo-700-800 sm:px-8 sm:py-3">Learn More</a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection