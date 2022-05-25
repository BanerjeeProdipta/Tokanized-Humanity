import { Link } from 'react-router-dom';
import campaignData from '../../../utils/data/campaignData';

function HomeFeed() {
  return (
    <section className="space-y-8 text-center">
      <span className="text-lg font-bold text-primary">Updates of recent campaigns</span>
      <h2 className="text-3xl font-bold font-heading">Latest projects updates</h2>
      <div className='grid grid-cols-3 gap-6 text-left'>
        {campaignData.slice(0, 3).map((campaign) => (
          <div key={campaign.id} className="w-full py-2 mb-4">
            <div className="flex">
              <Link
                to={`/user/${campaign.creatorData.id}`}
              >
                <img
                  className="flex flex-shrink-0 rounded-full w-14 h-14"
                  src={campaign.creatorData.profilePicture}
                  alt=""
                />
              </Link>
              <div className="w-full ml-2 rounded-xl">
                <div className="text-sm">
                  <Link
                    to={`/user/${campaign.creatorData.id}`}
                    className="mr-2 font-bold text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-300"
                  >
                    {campaign.creatorData.name}
                  </Link>

                  <span className="mr-1 text-gray-600">
                    {
                      campaign.createdAt
                    }
                  </span>
                </div>
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
                              src={comment.createdBy.profilePicture}
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
          </div>
        ))
        }
      </div>
    </section>
  );
}

export default HomeFeed;
