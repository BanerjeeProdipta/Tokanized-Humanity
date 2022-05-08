import { Navigate, useRoutes } from 'react-router-dom';
import Layout from '../components/ui/Layout';
import ApplicationDetails from '../pages/ApplicationDetails';
import CampaignDetails from '../pages/CampaignDetails';
import CreateCampaign from '../pages/CreateCampaign';
import Landing from '../pages/Landing';
import MembershipApplications from '../pages/MembershipApplications';
import Profile from '../pages/Profile';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import { getRole } from '../utils';

function Routes() {
  const withoutLogin = {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Landing /> },
      { path: '/fund-request/:id', element: <CampaignDetails /> },
      { path: '/user/:id', element: <Profile /> },
      { path: '/sign-up', element: <SignUp /> },
      { path: '/sign-in', element: <SignIn /> },

    ],
  };

  const withLogin = {
    path: '/create',
    element: getRole() === 'user' ? <Layout /> : <Navigate to="/" />,
    children: [
      { path: '/create/campaign', element: <CreateCampaign /> },

    ],
  };

  const daoRoutes = {
    path: '/applications',
    element: getRole() === 'dao' ? <Layout /> : <Navigate to="/" />,
    children: [
      { path: '/applications', element: <MembershipApplications /> },
      { path: '/applications/:id', element: <ApplicationDetails /> },

    ],
  };

  const notFound = {
    path: '*',
    element: <div>Not Found</div>,
  };

  const routes = useRoutes([withoutLogin, withLogin, daoRoutes, notFound]);

  return (
    routes
  );
}

export default Routes;
