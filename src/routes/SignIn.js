import React from "react";

function SignIn() {
  const [userName, setUserName] = React.useState(null);
  const [password, setpassword] = React.useState(null);

  return (
    <>
      <input type="text" name="username" placeholder="enter name" />
      <input type="password" name="password" placeholder="enter password" />
    </>
  );
}

export default SignIn;
