import Image from "next/image";
import React from "react";
import { InputWithButton } from "./InputWithButton";

const Header = () => {
  return (
    <>
      <div className="bg-blue-300 h-20 flex items-center justify-around">
        <div className="flex justify-start items-center h-full ">
          {/* Adjust the image to fit the container */}
          <Image
            src="/images/logo.png"
            alt="Prieshub logo"
            width={200} 
            height={60} 
            className="h-full object-contain" 
          />
        </div>

        <div>
          <InputWithButton></InputWithButton>
        </div>
        <div className="flex gap-5">
          <h1>MyList</h1> {/* //conditional */}

          <h1>Login</h1>
        </div>


      </div>
    </>
  );
};

export default Header;
