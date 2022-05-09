import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import campaignData from '../../../utils/data/campaignData';
import settings from '../../../utils/slider';

function SliderComponent() {
  return (
    <div className="pb-4">
      <h2 className="pb-2 text-2xl font-bold">Fundraisers in your community</h2>
      <Slider {...settings} className="w-full">
        {
          campaignData.map((campaign) => (
            <div
              key={campaign.id}
              className="p-2 transition duration-700 border-2 hover:bg-gray-500/5 hover:border-primary group rounded-xl"
            >
              <Link
                className="space-y-1 "
                to={`/fund-request/${campaign.id}`}
              >
                <img
                  className="object-fill w-full h-48 transition duration-700 group-hover:scale-105 rounded-xl"
                  src={campaign.banner}
                  alt=""
                />
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
              </Link>
            </div>
          ))
        }
      </Slider>
    </div>
  );
}

export default SliderComponent;
