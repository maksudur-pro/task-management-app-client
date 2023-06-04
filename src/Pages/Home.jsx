import React from "react";
import InputForm from "./InputForm";

const Home = () => {
  return (
    <div className="mx-auto">
      <div className="flex lg:flex-row flex-col-reverse">
        <div className="lg:w-1/2">
          <h1>this is list section</h1>
        </div>
        <div className="lg:w-1/2">
          <InputForm></InputForm>
        </div>
      </div>
    </div>
  );
};

export default Home;
