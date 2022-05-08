import { useContractKit } from '@celo-tools/use-contractkit';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getRole, isAuthenticated } from '../../utils';

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    isAuthenticated();
    setIsLoggedIn(isAuthenticated());
    getRole();
  }, [isLoggedIn]);
  const { connect, address, destroy } = useContractKit();

  const handleConnect = () => {
    connect().catch((err:any) => console.log(err));
    navigate('/sign-up');
  };

  return (
    <div
      className="sticky top-0 z-50 flex justify-between py-2 lg:mx-0"
      style={{
        backdropFilter: 'blur(2px)',
      }}
    >
      <Link className="flex items-center mr-3 space-x-2" to="/">

        <img src="/Tokenized Humanity.png" alt="" className="h-10 " />

      </Link>
      <div className="flex items-center">

        { address && localStorage.getItem('user') && localStorage.getItem('user')!.length > 1 ? (
          <div className="flex items-center space-x-2">
            <p>
              { JSON.parse(localStorage.getItem('user')!).name}
            </p>

            {
              getRole() === 'dao' ? (
                (
                  <button
                    onClick={() => navigate('/applications')}
                    className="block px-4 py-2 text-sm transition duration-500 rounded-full text-primary hover:bg-primary hover:text-white"
                    type="button"
                  >
                    Applications
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
                localStorage.clear();
                setIsLoggedIn(false);
                navigate('/');
                destroy();
              }}
              className="block px-4 py-2 text-sm transition duration-500 rounded-full text-primary hover:bg-primary hover:text-white"
              type="button"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center">
            <button
              onClick={handleConnect()}
              className="block px-4 py-2 text-sm transition duration-500 rounded-full text-primary hover:bg-primary hover:text-white"
              type="button"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate('/sign-up')}
              className="block px-4 py-2 text-sm transition duration-500 rounded-full text-primary hover:bg-primary hover:text-white"
              type="button"
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
