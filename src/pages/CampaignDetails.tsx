/* eslint-disable no-nested-ternary */
import { Menu } from '@headlessui/react';
import { useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { BiSend } from 'react-icons/bi';
import { Link, useParams } from 'react-router-dom';
import TextArea from '../components/ui/form-fields/TextArea';
import { isOwner } from '../utils';
import campaignData from '../utils/data/campaignData';

function CampaignDetails() {
  const params = useParams();
  const [donated, setDonated] = useState(false);

  const handleDonation = () => {
    setDonated(true);
  };

  return (
    <div className="w-full">
      {
        params.id
          ? (
            <div className="w-full space-y-6">

              <h2 className="text-2xl font-bold">
                {campaignData[parseInt(params.id) - 1].name}
              </h2>
              <div className="flex justify-between w-full space-x-4">
                <img
                  className="object-fill w-1/2 h-full rounded-xl"
                  src={campaignData[parseInt(params.id) - 1].banner}
                  alt=""
                />
                <div className="w-1/2 px-8 pt-4 shadow-lg rounded-xl">
                  <div className="flex flex-col items-center justify-center w-full">
                    <h2 className="font-bold">
                      <span className="text-primary">
                        {campaignData[parseInt(params.id) - 1].fundRaised}

                      </span>
                      <span className="ml-1 text-sm font-normal">
                        raised of
                        {' '}
                        {
                          campaignData[parseInt(params.id) - 1].fundGoal
                        }
                        {' '}
                        goal
                      </span>
                    </h2>
                    <p className="py-2 text-sm text-gray-500/80">
                      {campaignData[parseInt(params.id) - 1].donationCount}
                      {' '}
                      donations
                    </p>
                  </div>

                  <div className="relative w-full pt-4 space-y-4">

                    {isOwner(parseInt(params.id) - 1)
                      ? (
                        <button type="button" className="block w-full py-2 text-white transition rounded-full bg-primary hover:bg-secondary">
                          Withdraw
                        </button>
                      )
                      : (
                        <Menu>
                          <Menu.Button
                            className="block w-full py-2 text-white transition rounded-full bg-primary hover:bg-secondary"
                          >
                            {donated ? 'Donated' : 'Donate'}
                          </Menu.Button>
                          <Menu.Items className="absolute rounded-xl left-3 w-96 bg-gray-50 dark:bg-gray-800">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  type="button"
                                  onClick={handleDonation}
                                  className={`${active && 'bg-blue-500'} block hover:bg-gray-500/10 p-2 w-full`}
                                >
                                  Silver
                                </button>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  type="button"
                                  onClick={handleDonation}
                                  className={`${active && 'bg-blue-500'} block hover:bg-gray-500/10 p-2 w-full`}
                                >
                                  Gold
                                </button>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  type="button"
                                  onClick={handleDonation}
                                  className={`${active && 'bg-blue-500'} block hover:bg-gray-500/10 p-2 w-full`}
                                >
                                  Platinum
                                </button>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Menu>
                      )}
                    <button
                      className="block w-full py-2 transition border rounded-full text-primary border-primary hover:bg-primary hover:text-white"
                      type="button"
                    >
                      Share
                    </button>
                  </div>

                  <div className="py-4 space-y-3">
                    {campaignData[parseInt(params.id) - 1].donations.map(
                      (donation, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <Link to={`/user/${donation.donator.id}`} key={index} className="flex items-center space-x-2">
                          <img
                            src={donation.donator.profilePicture}
                            alt=""
                            className="flex flex-shrink-0 w-10 h-10 rounded-full"
                          />
                          <div>
                            <p className="font-semibold">{donation.donator.name}</p>
                            <div className="flex items-center space-x-2 text-sm text-gray-500/80">
                              <p>
                                Donated
                                <span className="pr-2 font-semibold border-r border-primary">
                                  {' '}
                                  {donation.amount}
                                </span>
                              </p>

                              <p>
                                {
                                  donation.donatedAt
                                }

                              </p>
                            </div>
                          </div>
                        </Link>
                      ),
                    )}

                  </div>
                </div>

              </div>
              {
                isOwner(parseInt(params.id) - 1) ? (
                  <button
                    type="button"
                    className="flex items-center transition rounded-full text-primary hover:text-secondary"
                  >
                    <AiFillEdit />
                    <span className="ml-4">Edit</span>
                  </button>
                )
                  : (
                    <div className="flex items-center">
                      <Link to="/user/1" className="flex-shrink-0">
                        <img
                          className="inline-block w-12 h-12 mr-4 rounded-full"
                          src={campaignData[parseInt(params.id) - 1].creatorData.profilePicture}
                          alt=""
                        />
                      </Link>
                      <div className="font-semibold ">
                        <Link to={`/user/${campaignData[parseInt(params.id) - 1].creatorData.id}`} className="text-secondary dark:text-primary">
                          {
                            campaignData[parseInt(params.id) - 1].creatorData.name
                          }

                        </Link>
                        {' '}
                        is organizing this fundraiser.
                        <p className="mt-1 text-sm font-normal text-gray-500/60">
                          {
                            campaignData[parseInt(params.id) - 1].creatorData.profession
                          }

                        </p>
                      </div>
                    </div>
                  )
              }
              <div className="flex items-center space-x-2 text-gray-500/80">
                <p className="text-sm italic">
                  Created on
                  {' '}
                  {campaignData[parseInt(params.id) - 1].startDate}
                </p>
                <div className="w-1 h-1 rounded bg-primary" />
                <p className="text-sm italic">
                  Valid Until
                  {' '}
                  {campaignData[parseInt(params.id) - 1].endDate}
                </p>
              </div>
              <p className="max-w-3xl leading-loose">
                {
                  campaignData[parseInt(params.id) - 1].description
                }
              </p>
              {
                campaignData[parseInt(params.id) - 1].comments.map(
                  (comment) => (
                    <div key={comment.id} className="flex items-center space-x-2">
                      <img
                        src={comment.createdBy.profilePicture}
                        alt=""
                        className="flex flex-shrink-0 w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-semibold">{comment.createdBy.name}</p>
                        <p className="text-sm">{comment.comment}</p>
                      </div>
                    </div>
                  ),
                )
              }
              {
                isOwner(parseInt(params.id) - 1) && (
                  <div className="relative">
                    <TextArea
                      className="max-w-3xl"
                      placeholder="Post updates..."
                    />
                    <button
                      type="button"
                      className="absolute p-1 rounded-full bottom-4 right-40 text-primary hover:bg-primary hover:text-white"
                    >
                      <BiSend
                        className="w-4 h-4"
                      />
                    </button>
                  </div>
                )
              }
            </div>
          ) : (
            <p>No Campaign Found</p>
          )

      }
    </div>

  );
}

export default CampaignDetails;
