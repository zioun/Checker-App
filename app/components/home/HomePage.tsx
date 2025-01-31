import React from "react";
import { 
    Brands, OfferItems, Categories, Hero, Mens, Women, Kids, 
    Summer, Winter, Indoor, Outdoor, Mobile, Computers, 
    Electronics, Garden, House
} from "./index";
    
import Link from "next/link";

const HomePage = () => {
    return (
        <div className="container mx-auto">

            {/* roushan vai starts here  */}
            <div className="flex gap-5 mt-5">
                <Hero></Hero>
                <OfferItems></OfferItems>
            </div>
            <div>
                <Categories></Categories>
                <Brands></Brands>
            </div>

            {/* roushan vai ends  here  */}
            
            
            
            {/* Zioun vai starts here  */}

            <div className="flex gap-5 mt-5">
                <Link href="" className="block w-[50%] h-[250px]">
                    <Mens />
                </Link>

                <Link href={""} className="block w-[50%] h-[250px]">
                    <Women></Women>
                </Link>
            </div>
            <div className="flex justify-center mt-5">
                <Link href="" className="block w-[50%] h-[250px]">
                    <Kids></Kids>
                </Link>
            </div>
            <div className="flex gap-5 mt-5">
                <Link href="" className="block w-[50%] h-[250px]">
                    <Summer></Summer>
                </Link>

                <Link href="" className="block w-[50%] h-[250px]">
                    <Winter></Winter>
                </Link>
            </div>

            <div className="flex justify-center mt-5">
                <Link href="" className="block w-[50%] h-[250px]">
                    <House></House>
                </Link>
            </div>

            {/* zioun vai ends  here  */}

            

            {/* hasib starts here  */}
            <div className="flex gap-5 mt-5">
                <Link href="" className="block w-[50%] h-[250px]">
                    <Indoor></Indoor>
                </Link>

                <Link href="" className="block w-[50%] h-[250px]">
                    <Outdoor></Outdoor>
                </Link>
            </div>

            <div className="flex justify-center mt-5">
                <Link href="" className="block w-[50%] h-[250px]">
                    <Garden></Garden>
                </Link>
            </div>

            <div className="flex gap-5 mt-5">
                <Link href="" className="block w-[50%] h-[250px]">
                    <Mobile></Mobile>
                </Link>

                <Link href="" className="block w-[50%] h-[250px]">
                    <Computers></Computers>
                </Link>
            </div>

            <div className="flex justify-center mt-5">
                <Link href="" className="block w-[50%] h-[250px]">
                    <Electronics></Electronics>
                </Link>
            </div>

        </div>
    );
}
export default HomePage;