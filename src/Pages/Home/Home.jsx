import React, { useContext } from "react";
import Banner from "../../Components/Banner/Banner";
import Content from "../../Components/Content/Content";
import EditPopup from "../../Components/EditPopup/EditPopup";
import PostPopup from "../../Components/ShowPopup/ShowPopup";
import { AuthContext } from "../../Provider/AuthContext";

const Home = () => {
  const { showPopup, editPopup } = useContext(AuthContext);

  return (
    <>
      <Banner></Banner>
      {showPopup ? <PostPopup ></PostPopup> : ""}
      {editPopup ? <EditPopup ></EditPopup> : ""}
      <Content></Content>
    </>
  );
};

export default Home;
