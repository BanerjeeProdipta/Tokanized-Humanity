import { BiFile, BiUser } from 'react-icons/bi';
import { FaQuoteLeft } from 'react-icons/fa';
import { Link, useNavigate, useParams } from 'react-router-dom';
import campaignCreatorData from '../utils/data/campaignCreatorData';
import campaignData from '../utils/data/campaignData';

function Profile() {
  const params = useParams();
  const navigate = useNavigate();


  function getSuccessfulProject() {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < campaignData.length; i++) {
      if (campaignData[i].creatorData.id === (3)) {
        return (
          <li>
            <div className="p-2 transition duration-700 border-2 hover:bg-gray-500/5 hover:border-primary group rounded-xl">
              <Link
                className="space-y-1 "
                to={`/fund-request/${campaignData[i].id}`}
              >
                <img
                  className="object-fill w-full h-48 transition duration-700 group-hover:scale-105 rounded-xl"
                  src={campaignData[i].banner}
                  alt=""
                />
                <h2 className="pt-2">{campaignData[i].name}</h2>
                <p className="text-sm text-gray-600 truncate">
                  {campaignData[i].description}
                </p>
                <div className="text-xs font-bold">
                  <span className="text-primary">
                    {campaignData[i].fundRaised}
                    {' '}
                    raised
                  </span>
                  ·
                  {campaignData[i].donationCount}
                  {' '}
                  donations
                </div>
              </Link>
            </div>
          </li>
        );
      }
    }
    return null;
  }

  return (
    <div>
      {
        params.id
          ? (
            <div className="md:flex">

              <div className="w-full md:w-1/3">
                <div className="border-b-4 border-primary">
                  <div className="overflow-hidden image">
                    <img
                      className="w-full h-auto max-w-xs mx-auto rounded-xl"
                      src={campaignCreatorData[parseInt(params.id) - 1].image}
                      alt=""
                    />
                  </div>
                  <h3 className="my-1 text-lg font-bold leading-8 ">{campaignCreatorData[parseInt(params.id) - 1].name}</h3>
                  <p className="leading-6 text-semibold">
                    {
                      campaignCreatorData[parseInt(params.id) - 1].profession
                    }

                  </p>
                  <div className="flex pt-6 space-x-2">
                    <FaQuoteLeft className="text-primary" />
                    <p className="text-sm italic leading-6 ">
                      {
                        campaignCreatorData[parseInt(params.id) - 1].bio
                      }
                    </p>
                  </div>
                  <ul
                    className="py-2 mt-3 divide-y rounded shadow-sm hover:shadow"
                  >
                    <li className="flex items-center py-3">
                      <span>Status</span>
                      <span className="ml-auto">
                        <span
                          className="px-2 py-1 text-sm text-white rounded bg-primary"
                        >
                          {
                            campaignCreatorData[parseInt(params.id) - 1].status
                          }
                        </span>
                      </span>
                    </li>
                    <li className="flex items-center py-3">
                      <span>Member since</span>
                      <span className="ml-auto">
                        {
                          campaignCreatorData[parseInt(params.id) - 1].createdAt
                        }

                      </span>
                    </li>
                  </ul>
                </div>
                <div className="my-4" />
                <div className="px-3 pt-3 hover:shadow">
                  <div className="flex items-center space-x-3 text-xl font-semibold leading-8 ">
                    <span className="text-primary">
                      <svg
                        className="h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </span>
                    <span>Similar Profiles</span>
                  </div>
                  <div className="grid grid-cols-3">

                    {
                      campaignCreatorData.slice(0, 3).map((creator) => (
                        <div key={creator.id} className="mt-2 text-center">
                          <Link to={`/user/${creator.id}`}>

                            <img
                              className="w-16 h-16 mx-auto rounded-full"
                              src={creator.image}
                              alt=""
                            />
                          </Link>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
              <div className="w-full h-64 mx-2 md:w-9/12">

                <div className="p-3 rounded-sm shadow-sm">
                  <div className="flex items-center space-x-2 font-semibold leading-8 ">
                    <BiUser className="text-primary" size={24} />
                    <span className="tracking-wide">About</span>
                  </div>
                  <div className="">
                    <div className="grid text-sm md:grid-cols-2">
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">First Name</div>
                        <div className="px-4 py-2">
                          {
                            campaignCreatorData[parseInt(params.id) - 1].name
                          }

                        </div>
                      </div>

                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Gender</div>
                        <div className="px-4 py-2">
                          {
                            campaignCreatorData[parseInt(params.id) - 1].gender
                          }

                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Contact No.</div>
                        <div className="px-4 py-2">
                          {
                            campaignCreatorData[parseInt(params.id) - 1].contact
                          }

                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Address</div>
                        <div className="px-4 py-2">
                          {
                            campaignCreatorData[parseInt(params.id) - 1].address
                          }

                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Email.</div>
                        <div className="px-4 py-2">
                          <a className="text-blue-800" href="mailto:jane@example.com">
                            {
                              campaignCreatorData[parseInt(params.id) - 1].email
                            }

                          </a>
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Birthday</div>
                        <div className="px-4 py-2">
                          {
                            campaignCreatorData[parseInt(params.id) - 1].dob
                          }

                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="mt-2" />

                <div className="p-3 rounded-sm shadow-sm">

                  <div>
                    <div className="flex items-center mb-3 space-x-2 font-semibold leading-8 ">
                      <BiFile className="text-primary" size={24} />
                      <span className="tracking-wide">Successful Projects</span>
                    </div>
                    <ul className="grid grid-cols-2 gap-2 list-inside">
                      {
                        getSuccessfulProject()
                      }

                    </ul>
                  </div>
                  <div className="flex justify-end pt-6 space-x-8">
                    <button
                      type="button"
                      onClick={() => navigate('/applications')}
                      className="block w-full max-w-xs py-2 text-white transition rounded-full bg-primary hover:bg-secondary"
                    >
                      Delete
                    </button>

                  </div>
                </div>
              </div>
            </div>
          ) : (<p>No profile found.</p>)
      }

    </div>

  );
}

export default Profile;
