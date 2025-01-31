import Image from "next/image";
import React from "react";

const Footer = () => {
  return <footer className="footer footer-center bg-blue-200 text-primary-content p-10 mt-10">
  <div className="flex flex-col justify-center items-center">
   <Image
            src="/images/logo.png"
            alt="Prieshub logo"
            width={200} 
            height={60} 
            className="h-full object-contain" 
      />
      
    <p className="font-bold pt-10 text-center">
        
      PreisHub GmbH
      <br />
      An Emerging Affiliate Marketing 
    </p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </div>
  
</footer>;
};

export default Footer;
