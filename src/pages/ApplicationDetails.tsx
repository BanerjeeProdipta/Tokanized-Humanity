import { BiFile, BiUser } from 'react-icons/bi';
import { FaQuoteLeft } from 'react-icons/fa';
import { Link, useNavigate, useParams } from 'react-router-dom';
import applicationData from '../utils/data/applicationData';

function ApplicationDetails() {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <div>
      {
        params.id ? (

          <div className="md:flex ">
            <div className="w-full md:w-1/3">
              <div className="border-b-4 border-primary">
                <div className="overflow-hidden image">
                  <img
                    className="w-full h-auto max-w-xs mx-auto rounded-xl"
                    src={applicationData[parseInt(params.id) - 1].image}
                    alt=""
                  />
                </div>
                <h3 className="my-1 text-lg font-bold leading-8 ">
                  {
                    applicationData[parseInt(params.id) - 1].name
                  }

                </h3>
                <p className="leading-6 text-semibold">
                  {
                    applicationData[parseInt(params.id) - 1].profession
                  }

                </p>
                <div className="flex pt-6 space-x-2">
                  <FaQuoteLeft className="text-primary" />
                  <p className="text-sm italic leading-6 ">
                    {
                      applicationData[parseInt(params.id) - 1].bio
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
                          applicationData[parseInt(params.id) - 1].status
                        }
                      </span>
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
                  <span>Pending Applicants</span>
                </div>
                <div className="grid grid-cols-3">
                  {
                    applicationData.slice(0, 3).map((applicants) => (
                      <div key={applicants.id} className="mt-2 text-center">

                        <Link to={`/applications/${applicants.id}`}>

                          <img
                            className="w-16 h-16 mx-auto rounded-full"
                            src={applicants.image}
                            alt=""
                          />
                        </Link>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            <div className="w-full mx-2 md:w-9/12">

              <div className="p-3 rounded-sm shadow-sm">
                <div className="flex items-center space-x-2 font-semibold leading-8 ">
                  <BiUser className="text-primary" size={24} />
                  <span className="tracking-wide">About</span>
                </div>
                <div className="">
                  <div className="grid text-sm md:grid-cols-2">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold"> Name</div>
                      <div className="px-4 py-2">
                        {
                          applicationData[parseInt(params.id) - 1].name
                        }
                      </div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Gender</div>
                      <div className="px-4 py-2">

                        {
                          applicationData[parseInt(params.id) - 1].gender
                        }
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Contact No.</div>
                      <div className="px-4 py-2">
                        {
                          applicationData[parseInt(params.id) - 1].phone
                        }
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold"> Address</div>
                      <div className="px-4 py-2">
                        {
                          applicationData[parseInt(params.id) - 1].address
                        }
                      </div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Email.</div>
                      <div className="px-4 py-2">
                        <a className="text-blue-800" href="mailto:jane@example.com">

                          {
                            applicationData[parseInt(params.id) - 1].email
                          }
                        </a>
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Birthday</div>
                      <div className="px-4 py-2">
                        {
                          applicationData[parseInt(params.id) - 1].dob
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
                    <span className="tracking-wide">Supported Documents</span>
                  </div>
                  <div className="flex flex-col justify-between h-full space-y-4">
                    <div>

                      <p className="font-medium text-gray-500">ID:</p>
                      <img src="/document/nid.jpg" alt="" className="p-2 mt-2 border h-52 w-96 blur-sm" />
                    </div>

                    <div>
                      <p className="font-medium text-gray-500">Passport:</p>
                      <img src="/document/passport.jpg" alt="" className="p-2 mt-2 border h-52 w-96 blur-sm" />
                    </div>

                    <div>
                      <p className="font-medium text-gray-500">Driving License:</p>
                      <img src="/document/driving-license.jpg" alt="" className="p-2 mt-2 border h-52 w-96 blur-sm" />
                    </div>

                  </div>
                </div>

              </div>
              <div className="flex justify-end space-x-8">
                <button
                  type="button"
                  onClick={() => navigate('/applications')}
                  className="block w-full py-2 transition border rounded-full text-primary border-primary hover:bg-primary hover:text-white"
                >
                  Reject
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/applications')}
                  className="block w-full py-2 text-white transition rounded-full bg-primary hover:bg-secondary"
                >
                  Approve
                </button>

              </div>
            </div>

          </div>
        ) : (

          <p>
            No application found.
          </p>
        )
      }
    </div>

  );
}

export default ApplicationDetails;
