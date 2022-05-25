
const HeroSection = () => {

  return (
    <div className="flex items-center justify-between w-full">
      <div className="relative flex flex-col py-20 rounded-lg "
      >
        <img className="absolute top-0 right-0 mt-8" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg2.svg" alt="bg" />
        <img className="absolute bottom-0 left-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg3.svg" alt="bg" />

        <div className="max-w-xl px-8 pl-12 space-y-12">
          <h1 className="text-5xl font-bold leading-tight text-white">For the happiness of others.</h1>
          <div>
            <a href="#how-it-works" className="px-4 py-1 text-sm text-white transition duration-150 ease-in-out bg-transparent border border-white rounded hover:text-primary lg:text-xl hover:border-primary focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-primary focus:ring-white hover:bg-primary-800 sm:px-8 sm:py-3">Learn More</a>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          className="max-w-2xl h-96 rounded-xl"
          src="/header.webp"
        />
      </div>
    </div>
  );
}

export default HeroSection