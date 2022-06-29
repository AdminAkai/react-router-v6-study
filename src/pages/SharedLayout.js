import { Outlet } from 'react-router-dom'

import StyledNavbar from '../components/StyledNavbar'

function SharedLayout() {
  return (
    <>
      <StyledNavbar />
      <Outlet />
    </>
  );
};

export default SharedLayout;
