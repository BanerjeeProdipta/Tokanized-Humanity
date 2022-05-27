import { useContractKit } from '@celo-tools/use-contractkit';
import { useState } from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import applicationData from '../utils/data/applicationData';
import campaignCreatorData from '../utils/data/campaignCreatorData';
import settings from '../utils/slider';

function MembershipApplications() {
  const { address } = useContractKit();


  const populateSlider = (data: any) => {
    const [slider, setSlider] = useState<Slider>();
    const handleNextSlide = () => slider && slider.slickNext();
    const handlePrevSlide = () => slider && slider.slickPrev();
    return <>
      <Slider
        ref={(r) => r && setSlider(r)}
        {...settings} className="w-full max-w-6xl">
        {
          data.map((v: any) => (
            <div key={v.id} className="p-4 text-center border rounded-xl">
              <div className='flex flex-col items-center'>
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={
                    v.image
                  }
                  alt={v.name}
                />
                <h5 className="mb-1 text-xl font-medium">{v.name}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">{v.profession}</span>
                <div className="flex mt-4 space-x-3 lg:mt-6">
                  <Link
                    to={`/applications/${v.id}`}
                    className="px-4 py-1 text-white transition duration-500 rounded-full whitespace-nowrap bg-primary hover:bg-secondary"
                  >
                    View Application
                  </Link>
                </div>
              </div>
            </div>
          ))
        }
      </Slider>
      <div className='flex justify-center w-full pt-6'>
        <div className='space-x-5'>
          <button onClick={handlePrevSlide}>
            <BiLeftArrow size={20} color="#06b6d4" />
          </button>
          <button onClick={handleNextSlide}>
            <BiRightArrow size={20} color="#06b6d4" />
          </button>
        </div>
      </div>
    </>
  }

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold">Dashboard</h2>
      <div className='flex space-x-12'>
        <div>
          <img
            className='h-48 bg-red-600 rounded'
            src="https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png"
            alt="" />
        </div>
        <div className='space-y-4'>
          <p className='text-xl font-bold'>
            <span className='font-thin opacity-60'>
              Wallet Address: </span> {address}
          </p>
        </div>
      </div>

      <div>
        <h2 className="py-2 text-2xl font-bold">Pending</h2>
        {
          populateSlider(applicationData)
        }
      </div>
      <div>
        <h2 className="py-2 text-2xl font-bold">Approved</h2>
        {
          populateSlider(campaignCreatorData)}
      </div>
    </div>
  );
}

export default MembershipApplications;
