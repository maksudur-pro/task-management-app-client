import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import errorPage from "../../src/assets/error.json";
const ErrorPage = () => {
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex lg:absolute flex-col items-center justify-center px-5 mx-auto my-8">
        <Lottie animationData={errorPage} loop={true}></Lottie>
        <div className="max-w-md text-center lg:relative lg:bottom-[240px] lg:right-[270px]">
          <Link to="/" className="btn btn-outline btn-error">
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
