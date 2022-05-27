import { useState } from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import campaignData from '../../../utils/data/campaignData';
import settings from '../../../utils/slider';

function HomeFeed() {

  const [slider, setSlider] = useState<Slider>();
  const handleNextSlide = () => slider && slider.slickNext();
  const handlePrevSlide = () => slider && slider.slickPrev();


  return (
    <section className="space-y-8 text-center">
      <span className="text-lg font-bold text-primary">Updates of recent campaigns</span>
      <h2 className="text-3xl font-bold font-heading">Latest projects updates</h2>
      <Slider
        ref={(r) => r && setSlider(r)}
        {...settings} className="w-full text-left">
        {campaignData.map((campaign) => (
          <div key={campaign.id} className="w-full px-2 py-2 mb-4">
            <div className='flex items-center justify-between'>
              <Link
                className='flex items-center flex-shrink-0 w-10 h-10 space-x-2'
                to={`/user/${campaign.creatorData.id}`}
              >
                <img
                  className="flex flex-shrink-0 w-10 h-10 rounded-full"
                  src={campaign.creatorData.image}
                  alt=""
                />
                <p className='whitespace-nowrap'>  {campaign.creatorData.name}</p>
              </Link>
              <span className="mr-1 text-gray-600">
                {
                  campaign.createdAt
                }
              </span>
            </div>
            <div className="w-full ml-2 rounded-xl">
              <Link to={`/fund-request/${campaign.id}`} className="px-4 py-2 mt-2 rounded-xl">
                <div className="space-y-2">
                  <p className='truncate'>
                    {campaign.description}
                  </p>
                  <img
                    src={campaign.banner}
                    alt=""
                    className="max-w-xl rounded-lg lg:w-full"
                  />
                </div>
                {
                  campaign.comments.map((comment) => (
                    <div key={comment.id} className="pt-4 space-y-4">
                      <div className="flex items-center rounded-full">
                        <div className="flex flex-shrink-0">
                          <img
                            className="w-8 h-8 mr-2 rounded-full"
                            src={comment.createdBy.image}
                            alt=""
                          />
                        </div>
                        <p className="text-sm opacity-80">{comment.comment}</p>
                      </div>
                    </div>
                  ))
                }
              </Link>
            </div>

          </div>
        ))
        }</Slider>
      <div className='space-x-5 '>
        <button onClick={handlePrevSlide}>
          <BiLeftArrow size={20} color="#06b6d4" />
        </button>
        <button onClick={handleNextSlide}>
          <BiRightArrow size={20} color="#06b6d4" />
        </button>
      </div>
    </section >
  );
}

export default HomeFeed;
