import { useState } from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import campaignData from '../../../utils/data/campaignData';
import settings from '../../../utils/slider';

function SliderComponent() {
  const [slider, setSlider] = useState<Slider>();
  const handleNextSlide = () => slider && slider.slickNext();
  const handlePrevSlide = () => slider && slider.slickPrev();

  return (
    <section className="space-y-8 text-center">
      <span className="text-lg font-bold text-primary">Campaigns in your community</span>
      <h2 className="text-3xl font-bold font-heading">Donate to help.</h2>
      <Slider
        ref={(r) => r && setSlider(r)}
        {...settings} className="w-full text-left">
        {
          campaignData.map((campaign) => (
            <div
              key={campaign.id}
              className="overflow-hidden transition duration-700 border-2 hover:bg-gray-500/5 hover:border-primary group rounded-xl"
            >
              <Link
                className="space-y-1 "
                to={`/fund-request/${campaign.id}`}
              >
                <img
                  className="w-full h-48 transition duration-700 group-hover:scale-105 rounded-xl"
                  src={campaign.banner}
                  alt=""
                />
                <div className='p-2'>
                  <h2 className="pt-2">{campaign.name}</h2>
                  <p className="text-sm text-gray-600 truncate">
                    {
                      campaign.description
                    }
                  </p>
                  <div className="text-xs font-bold ">
                    <span className="text-primary">
                      {campaign.fundRaised}
                      {' '}
                      raised
                    </span>
                    <span className="mx-4">
                      |
                    </span>
                    {campaign.donationCount}
                    {' '}
                    donations
                  </div>
                </div>
              </Link>
            </div>
          ))
        }
      </Slider>
      <div className='space-x-5 '>
        <button onClick={handlePrevSlide}>
          <BiLeftArrow size={20} color="#06b6d4" />
        </button>
        <button onClick={handleNextSlide}>
          <BiRightArrow size={20} color="#06b6d4" />
        </button>
      </div>
    </section>

  );
}

export default SliderComponent;
