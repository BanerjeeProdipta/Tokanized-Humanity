import { useContractKit } from '@celo-tools/use-contractkit';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getRole, isAuthenticated } from '../../../utils';

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    isAuthenticated();
    setIsLoggedIn(isAuthenticated());
    getRole();
  }, [isLoggedIn]);
  const { connect, address, destroy } = useContractKit();

  const handleConnect = async () => {
    try {
      await connect();
    } catch (e) {
      console.log({ e });
    }
  };


  return (
    <div
      className="container sticky top-0 z-50 flex justify-between py-2 mx-12 text-white bg-gray-900 border-b px-36 lg:mx-0"

    >
      <Link className="flex items-center mr-3 space-x-2" to="/">

        <img src="/Tokenized Humanity.png" alt="" className="h-10 " />

      </Link>
      <div className="flex items-center">

        {address ? (
          <div className="flex items-center space-x-2">
            {
              getRole() === 'dao' &&
              <Link to="/my-profile">
                <img
                  className='rounded-full w-9 h-9'
                  src="https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png" alt="" />
              </Link>
            }

            <p className='text-sm'>{address.slice(0, 6)}...{address.slice(address.length - 4, address.length)}</p>

            {
              getRole() === 'dao' ? (
                (
                  <button
                    onClick={() => navigate('/applications')}
                    className="block px-4 py-2 text-sm transition duration-500 rounded-full text-primary hover:bg-primary hover:text-white"
                    type="button"
                  >
                    Dashboard
                  </button>
                )
              )
                : getRole() === 'user' && (

                  <button
                    onClick={() => navigate('/create/campaign')}
                    className="block px-4 py-2 text-sm transition duration-500 rounded-full text-primary hover:bg-primary hover:text-white"
                    type="button"
                  >
                    Create a Campaign
                  </button>
                )
            }
            <button
              onClick={() => {
                localStorage.removeItem('user');
                setIsLoggedIn(false);
                navigate('/');
                destroy();
              }}
              className="block px-4 py-2 text-sm transition duration-500 rounded-full text-primary hover:bg-primary hover:text-white"
              type="button"
            >
              Disconnect Wallet
            </button>
          </div>
        ) : (
          <div className="flex items-center">


            <button
              onClick={handleConnect}
              className="block px-4 py-2 text-sm transition duration-500 rounded-full text-primary hover:bg-primary hover:text-white"
            >
              Connect Wallet
            </button>
          </div>
        )}

      </div>
    </div>

  );
}

export default Navbar;
