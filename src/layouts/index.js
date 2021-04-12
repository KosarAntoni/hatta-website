import React from "react";
import Navigation from "../components/organisms/Navigation/Navigation";
import GlobalStyle from "../styles/globalStyles";

const MainLayout = ({children}) => (
  <>
    <GlobalStyle/>
    <Navigation />
    {children}
  </>
);

export default MainLayout;
