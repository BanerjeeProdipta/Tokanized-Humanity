/* eslint-disable no-nested-ternary */
import { useContractKit } from '@celo-tools/use-contractkit';
import { Menu } from '@headlessui/react';
import { useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { BiSend } from 'react-icons/bi';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Modal } from '../components/ui/common/Modal';
import TextArea from '../components/ui/form-fields/TextArea';
import donationABI from '../config/abis';
import { donationContractAddress } from '../config/contracts';
import { isOwner } from '../utils';
import campaignData from '../utils/data/campaignData';



function CampaignDetails() {
  const params = useParams();
  const [donated, setDonated] = useState(false);
  const [customAmount, setCustomAmount] = useState(0);
  const [show, setShow] = useState(false)
  const { performActions, } = useContractKit();

  const handleDonation = async (donationAmount: string) => {
    try {
      await performActions(async (kit) => {
        const donationContract = new kit.web3.eth.Contract(donationABI, donationContractAddress);
        console.log(donationContract)
        const sendConf = {
          from: kit.defaultAccount,
          gasLimit: '10000000',
          gasPrice: kit.gasPrice,
          value: kit.web3.utils.toWei(donationAmount, 'ether')
        };

        const fundit = await donationContract.methods.donate().send(sendConf)

        console.log(fundit)
      });
      setDonated(true)
      toast.success(`Successfully donated ${donationAmount} celo!`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });

    }
    catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="w-full" >
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
                              {(active: any) => (
                                <button
                                  type="button"
                                  onClick={() => handleDonation('10')}
                                  className={`${active && 'bg-gray-800'} block hover:bg-gray-500/10 p-2 w-full`}
                                >
                                  Silver 10
                                </button>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {(active: any) => (
                                <button
                                  type="button"
                                  onClick={() => handleDonation('20')}
                                  className={`${active && 'bg-gray-800'} block hover:bg-gray-500/10 p-2 w-full`}
                                >
                                  Gold 20
                                </button>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {(active: any) => (
                                <button
                                  type="button"
                                  onClick={() => handleDonation('30')}
                                  className={`${active && 'bg-gray-800'} block hover:bg-gray-500/10 p-2 w-full`}
                                >
                                  Platinum 30
                                </button>
                              )}
                            </Menu.Item>
                            <Menu.Item >
                              {(active: any) => (

                                <button
                                  type="button"
                                  onClick={() => setShow(true)}
                                  className={`${active && 'bg-gray-800'} block hover:bg-gray-500/10 p-2 w-full`}
                                >
                                  Custom Amount
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
                      )
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
      <Modal
        isOpen={show}
        setIsOpen={() => setShow(false)}>
        <div className='flex flex-col items-center px-2 pb-2 space-y-6 text-white w-72'>

          <p className='text-lg'>Enter amount for donation</p>

          <div className='flex items-center '>
            <input
              type='number' placeholder="Enter amount" onChange={(e: any) => setCustomAmount(e.target.value)}
              className="w-full px-3 py-2 rounded-l-lg bg-gray-500/20 focus:outline-none" />
            <button type="button"
              onClick={() => {
                handleDonation(customAmount.toString());
                setShow(false);
              }}
              className="px-4 py-2 rounded-r-lg bg-gray-500/20 hover:bg-gray-500/30">Donate</button>
          </div>

        </div>
      </Modal >
    </div >

  );
}

export default CampaignDetails;
