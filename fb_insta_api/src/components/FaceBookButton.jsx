import React from "react";
import FacebookLogin from "react-facebook-login";
import axios from "axios";

const FaceBookButton = () => {
  const responseFacebook = (response) => {
    console.log(response);
    axios({
      method: "POST",
      url: "http://localhost:8000/api/facebooklogin",
      data: { accessToken: response.accessToken, userID: response.userID },
    }).then((response) => {
      console.log("facebook login success", response);
    });
  };

  
  return (
    <div>
      <FacebookLogin
        appId="2806436562971375"
        autoLoad={true}
        callback={responseFacebook}
      />
    </div>
  );
};

export default FaceBookButton;
