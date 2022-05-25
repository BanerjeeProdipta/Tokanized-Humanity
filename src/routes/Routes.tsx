import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { getRole } from '../utils';

const LazyLayout = React.lazy(() => import("../components/ui/common/Layout"));
const LazyApplicationDetails = React.lazy(() => import("../pages/ApplicationDetails"));
const LazyCampaignDetails = React.lazy(() => import("../pages/CampaignDetails"));
const LazyCreateCampaign = React.lazy(() => import("../pages/CreateCampaign"));
const LazyLanding = React.lazy(() => import("../pages/Landing"));
const LazyMembershipApplications = React.lazy(() => import("../pages/MembershipApplications"));
const LazyProfile = React.lazy(() => import("../pages/Profile"));
const LazySignIn = React.lazy(() => import("../pages/SignIn"));
const LazySignUp = React.lazy(() => import("../pages/SignUp"));


function Routes() {
  const withoutLogin = {
    path: '/',
    element: <LazyLayout />,
    children: [
      { path: '/', element: <LazyLanding /> },
      { path: '/fund-request/:id', element: <LazyCampaignDetails /> },
      { path: '/user/:id', element: <LazyProfile /> },
      { path: '/sign-up', element: <LazySignUp /> },
      { path: '/sign-in', element: <LazySignIn /> },

    ],
  };

  const withLogin = {
    path: '/create',
    element: getRole() === 'user' ? <LazyLayout /> : <Navigate to="/" />,
    children: [
      { path: '/create/campaign', element: <LazyCreateCampaign /> },

    ],
  };

  const daoRoutes = {
    path: '/applications',
    element: getRole() === 'dao' ? <LazyLayout /> : <Navigate to="/" />,
    children: [
      { path: '/applications', element: <LazyMembershipApplications /> },
      { path: '/applications/:id', element: <LazyApplicationDetails /> },
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
