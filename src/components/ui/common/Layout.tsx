import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="pb-6 text-gray-900 transition-all bg-white dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col min-h-screen mx-4 max-w-7xl lg:mx-auto lg:px-8 ">
        <div className="flex justify-between px-6 pt-4 divide-x prose-headings:font-semibold prose-h1:text-4xl prose-h4:font-semibold prose-em:text-red-600 prose-em:italic prose-h4:mb-2">
          <Outlet />
        </div>
      </div>
    </div>

  );
}

export default Layout;
