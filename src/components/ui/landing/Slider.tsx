import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import campaignData from '../../../utils/data/campaignData';
import settings from '../../../utils/slider';

function SliderComponent() {
  return (
    <section className="space-y-8 text-center ">
      <span className="text-lg font-bold text-primary">Campaigns in your community</span>
      <h2 className="text-3xl font-bold font-heading">Build and launch without problems</h2>
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
                  className="w-full h-48 transition duration-700 group-hover:scale-105 rounded-xl"
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
    </section>

  );
}

export default SliderComponent;
