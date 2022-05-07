import React from "react";
import { FaGooglePlus } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { MdLocalPhone, MdMarkEmailRead } from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialSkype,
  TiSocialTwitter, TiSocialVimeo, TiSocialYoutube
} from "react-icons/ti";

const Footer = () => {
  return (
    <div>
        <div className="font-mono bg-slate-300 pt-5">
          <div className="md:flex justify-between mx-20 items-center">
            <div className="">
              <h1 className="text-2xl font-semibold font-serif text-center border-b-2 pb-3">
                Contact
              </h1>
              <p className="text-2xl font-bold font-serif text-center mt-5">
                Cellphone Warehouse
              </p>
              <p className="flex items-center space-x-2">
                <span>
                  <ImLocation2 />
                </span>
                <span>
                  Banglabazar,Dhaka,1210 <br /> Bangladesh
                </span>
              </p>
              <p className="flex items-center space-x-2">
                <span>
                  <MdLocalPhone />
                </span>
                <span>01623456789</span>
              </p>
              <p className="flex items-center space-x-2">
                <span>
                  <MdMarkEmailRead />
                </span>
                <span>hossainrafi71@gmail.com</span>
              </p>
            </div>
            <div className="mt-5">
              <h1 className="text-center text-2xl font-serif font-bold mb-5">
                Follow
              </h1>
              <div className="flex justify-center space-x-4 text-2xl text-blue-600">
                <p>
                  <TiSocialFacebook />
                </p>
                <p>
                  <TiSocialSkype />
                </p>
                <p>
                  <TiSocialTwitter />
                </p>
                <p>
                  <TiSocialYoutube />
                </p>
                <p>
                  <TiSocialLinkedin />
                </p>
                <p>
                  <TiSocialVimeo />
                </p>
                <p>
                  <FaGooglePlus />
                </p>
              </div>
            </div>
          </div>
          <p className="text-center py-3 font-serif text-xl font-bold">
            Copyright &#169; 2022
          </p>
        </div>
    </div>
  );
};

export default Footer;
