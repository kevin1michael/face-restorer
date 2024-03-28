import { useState } from "react";
// hello-world
import React from "react";

const Storyboard1 = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardStyle = {
    position: "relative",
    width: "300px",
    height: "auto",
  };

  const imgStyle = {
    width: "inherit",
    borderRadius: "10px",
  };

  const downloadStyle = {
    position: "absolute",
    bottom: "8%",
    right: "7%",
    padding: "10px",
    backgroundColor: isHovered ? "rgb(206, 206, 206)" : "rgb(255, 255, 255)",
    borderRadius: "10%",
    display: isHovered ? "block" : "none",
    color: isHovered ? "black" : "transparent",
  };

  const likeStyle = {
    position: "absolute",
    bottom: "8%",
    left: "7%",
    padding: "10px",
    backgroundColor: isHovered ? "rgb(206, 206, 206)" : "rgb(255, 255, 255)",
    borderRadius: "10%",
    display: isHovered ? "block" : "none",
    color: isHovered ? "black" : "transparent",
  };

  return (
    <>
      <div className="w-full h-full">
        <div>
          <div style={cardStyle}>
            <img
              src="https://images.pexels.com/photos/16645682/pexels-photo-16645682/free-photo-of-close-up-of-green-leaves.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt=""
              style={imgStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <div className="button-grp">
              <button style={likeStyle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
              <button style={downloadStyle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="antialiased text-gray-900 ">
            <div className="min-h-screen p-8 flex items-center justify-center">
              <div className="bg-white rounded-lg overflow-hidden shadow-2xl xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                <img
                  className="h-96 w-full object-cover object-end"
                  src="https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80"
                  alt="Home in Countryside"
                />
                <div className="p-6">
                  <div className="flex items-baseline">
                    <span className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
                      New
                    </span>
                    <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                      3 beds &bull; 2 baths
                    </div>
                  </div>
                  <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
                    Beautiful Home in the countryside
                  </h4>

                  <div className="mt-1">
                    <span>$1,900.00</span>
                    <span className="text-gray-600 text-sm">/ wk</span>
                  </div>
                  <div className="mt-2 flex items-center">
                    <span className="text-teal-600 font-semibold">
                      <span>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </span>
                    </span>
                    <span className="ml-2 text-gray-600 text-sm">
                      34 reviews
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center h-screen rounded-md">
                <div className="w-[154px] h-[289px]" />
                <div className="w-[435px] h-[356px]" />
                <div className="w-[358px] h-[231px]" />
                <article className="relative isolate flex flex-col overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto w-full">
                  <img
                    src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
                    alt="University of Southern California"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <h3 className="z-10 mt-3 text-3xl font-bold text-white">
                    Paris
                  </h3>
                  <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                    City of love
                  </div>
                </article>
                <div className="p-1 flex flex-wrap items-center justify-center h-screen">
                  <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
                    <svg
                      className="absolute bottom-0 left-0 mb-8"
                      viewBox="0 0 375 283"
                      fill="none"
                      style={{ transform: "scale(1.5)", opacity: 0.1 }}
                    >
                      <rect
                        x="159.52"
                        y="175"
                        width="152"
                        height="152"
                        rx="8"
                        transform="rotate(-45 159.52 175)"
                        fill="white"
                      />
                      <rect
                        y="107.48"
                        width="152"
                        height="152"
                        rx="8"
                        transform="rotate(-45 0 107.48)"
                        fill="white"
                      />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center">
                      <div
                        className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                        style={{
                          background: "radial-gradient(black, transparent 60%)",
                          transform:
                            "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                          opacity: 0.2,
                        }}
                      ></div>
                      <img
                        className="relative w-40"
                        src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                        alt=""
                      />
                    </div>
                    <div className="relative text-white px-6 pb-6 mt-6">
                      <span className="block opacity-75 -mb-1">Indoor</span>
                      <div className="flex justify-between">
                        <span className="block font-semibold text-xl">
                          Peace Lily
                        </span>
                        <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                          $36.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg">
                    <svg
                      className="absolute bottom-0 left-0 mb-8"
                      viewBox="0 0 375 283"
                      fill="none"
                      style={{ transform: "scale(1.5)", opacity: 0.1 }}
                    >
                      <rect
                        x="159.52"
                        y="175"
                        width="152"
                        height="152"
                        rx="8"
                        transform="rotate(-45 159.52 175)"
                        fill="white"
                      />
                      <rect
                        y="107.48"
                        width="152"
                        height="152"
                        rx="8"
                        transform="rotate(-45 0 107.48)"
                        fill="white"
                      />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center">
                      <div
                        className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                        style={{
                          background: "radial-gradient(black, transparent 60%)",
                          transform:
                            "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                          opacity: 0.2,
                        }}
                      ></div>
                      <img
                        className="relative w-40"
                        src="https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png"
                        alt=""
                      />
                    </div>
                    <div className="relative text-white px-6 pb-6 mt-6">
                      <span className="block opacity-75 -mb-1">Outdoor</span>
                      <div className="flex justify-between">
                        <span className="block font-semibold text-xl">
                          Monstera
                        </span>
                        <span className="block bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                          $45.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Storyboard1;
