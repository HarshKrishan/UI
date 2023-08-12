import React from "react";

const Footer = () => {
  return (
    <div className="m-0 p-16">
      <h1 className="text-5xl font-bold">Ableton</h1>

      <div className="flex justify-between">
        <div className="first_col w-1/3">
          <ul className="py-7">
            <li>Register Live or Push {`>`} </li>
            <li>About Ableton {`>`}</li>
            <li>Jobs {`>`}</li>
          </ul>
          <div className="icons">
            <ul className="flex gap-x-4">
              <li>
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/facebook.png"
                  alt="facebook"
                />
              </li>
              <li>
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/twitter--v1.png"
                  alt="twitter--v1"
                />
              </li>
              <li>
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/instagram-new--v1.png"
                  alt="instagram-new--v1"
                />
              </li>
              <li>
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/youtube-play.png"
                  alt="youtube-play"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="second_col w-1/3">
          <ul className="py-7">
            <li className="font-bold">Education</li>
            <li>Offers for students and teachers {`>`} </li>
            <li>Offers for institutions {`>`}</li>
            <li>Push 1 trade-in initiative {`>`}</li>
          </ul>
        </div>
        <div className="third_col w-1/3">
          <ul className="py-7">
            <li className="font-bold">Sign up to our newsletter</li>
            <li>
              Enter your email address to stay up to date with the latest
              offers, tutorials, downloads and more.
            </li>
          </ul>
          <div>
            <input
              type="text"
              placeholder="Email Address"
              className="border-2 border-gray-200 p-1 mr-2"
            />
            <button className="border-2 border-blue-200 bg-blue-600 text-white p-1 rounded-sm">Sign Up</button>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="first w-1/3">
          <ul className="py-7">
            <li className="font-bold">Community</li>
            <li>Find Ableton User Groups {`>`} </li>
            <li>About Certified Training {`>`}</li>
            <li>Become a Certified Trainer {`>`}</li>
          </ul>
        </div>
        <div className="second w-1/3">
          <ul className="py-7">
            <li className="font-bold">Distributors</li>
            <li>Find Distributors {`>`}</li>
            <li>Try Push in-store {`>`}</li>
          </ul>
        </div>
        <div className="third w-1/3">
          <ul className="py-7">
            <li className="font-bold">Language and Location</li>
            <li>English</li>
            <li>United States</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
