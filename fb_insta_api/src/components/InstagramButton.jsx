import React from "react";
import InstagramLogin from "react-instagram-login";

const InstagramButton = () => {
  const responseInstagram = (response) => {
    console.log(response);
  };
  return (
    <InstagramLogin
      clientId="2806436562971375"
      buttonText="Instagram"
      onSuccess={responseInstagram}
      onFailure={responseInstagram}
    />
  );
};

export default InstagramButton;
