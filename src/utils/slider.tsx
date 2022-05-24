function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className={`${className} bg-primary hover:bg-secondary transition pt-0.5 shrink-0 h-8 -mt-4 duration-700 flex justify-center items-center w-8 rounded-full`}
      style={{
        ...style,
        display: 'block',
        background: '#06b6d4',
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className={`${className} bg-primary hover:bg-secondary transition pt-0.5 shrink-0 h-8 -mt-4 duration-700 flex justify-center items-center w-8 rounded-full z-100`}
      style={{
        ...style,
        display: 'block',
        background: '#06b6d4',
        zIndex: 100,
      }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  initialSlide: 0,
  hoverPause: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default settings;
