import React from "react";
import { Button } from "@dengzhu-hub/ui-library";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
const Footer = () => {
  return (
    <footer className="max-container ">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start ">
          <a href="/">
            <img src={footerLogo} width={150} height={46} alt="" />
          </a>
          <p className="text-white-400 font-montserrat  text-base mt-6 whitespace-normal sm:max-w-sm">
            We take pride in providing exceptional service to our valued
            customers. Your feedback and loyalty inspire us to continue.
          </p>
          <div className="flex items-center justify-center gap-5 mt-8">
            {socialMedia.map(el => (
              <div
                key={el.alt}
                className="bg-white flex items-center justify-center h-12 w-12"
              >
                <img src={el.src} alt={el.alt} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center gap-8 flex-1 ">
          {footerLinks.map(section => (
            <div className="" key={section.title}>
              <h4 className="text-white text-2xl font-montserrat leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul className="list-none">
                {section.links.map(el => (
                  <li
                    key={el.name}
                    className="mt-3 flex flex-col py-2 px-3 text-white-400 text-base  font-palanquin hover:text-slate-400 hover:bg-slate-gray"
                  >
                    <a href="">{el.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-24 max-sm:items-center justify-between max-sm:flex-col max-sm:gap-12">
        <p className="text-white-400 md:max-w-md sm:max-w-sm text-sm leading-1">
          &copy;2023 nike, Inc. All rights reserved. Our content and products
          are protected by copyright laws. Unauthorized use, reproduction, or
          distribution is prohibited. We are an authorized Nike retailer,
          committed to authenticity. For inquiries, contact us. Respect
          copyright, preserve creativity.
        </p>
        <p className="text-base text-slate-200 sm:max-w-sm md:max-w-md">
          We&apos;re privileged to partner with you. Together, we deliver the
          best in Nike products and service. Thank you for choosing us.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
