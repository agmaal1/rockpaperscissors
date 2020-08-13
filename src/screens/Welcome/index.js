import React from "react";
import Button from "../../lib/Button";

function Welcome({ history }) {
  const handleClick = () => {
    history.push("/choice");
  };

  return (
    <Button type="button" onClick={handleClick} name="rock" alt="rock">
      START
    </Button>
  );
}

export default Welcome;
