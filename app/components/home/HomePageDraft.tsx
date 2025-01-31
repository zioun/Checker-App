import React from 'react';
import Brands from './Brands';
import OfferItems from './OfferItems';
import Categories from './Categories';
import Hero from './Hero';
import Mens from './Mens';
import Women from './Women';
import Kids from './Kids';
import Summer from './Summer';
import Winter from './Winter';
import Indoor from './Indoor';
import Outdoor from './Outdoor';
import Mobile from './Mobile';
import Computers from './Computers';
import Electronics from './Electronics';
import Garden from './Garden';
import House from './House';
import Link from 'next/link';

const HomePage = () => {
    return (

        <div>

            {/* Roushan vai starts */}
            <div className='flex gap-5 mt-5'>
                <Hero></Hero>
                <OfferItems></OfferItems>
            </div>
            <div>
                <Categories></Categories>
                <Brands></Brands>
            </div>

            {/* roushan vai ends  */}


            
            {/* zioun vai starts  */}
            <div className='flex gap-5 mt-5'>
                <Link href="" className="block w-[50%] h-[250px]">
                    <Mens />
                </Link> 

                <Link href={''} className="block w-[50%] h-[250px]">
                    
                <Women></Women>
                </Link>
            </div>
            <div className='flex justify-center mt-5'>

                <Link href="" className="block w-[50%] h-[250px]">
                    
                <Kids></Kids>
                </Link>
            </div>
            <div className='flex gap-5 mt-5'>

                <Link href="" className="block w-[50%] h-[250px]">
                    
                <Summer></Summer>
                </Link>

                <Link href="" className="block w-[50%] h-[250px]">
                    
                <Winter></Winter>
                </Link>
            </div>

            <div className='flex gap-5 mt-5'>
               <Link href="" className="block w-[50%] h-[250px]">
                    
                <Indoor></Indoor>
                </Link>

                <Link href="" className="block w-[50%] h-[250px]">
                    
                <Outdoor ></Outdoor>
                </Link>
            </div>
            {/* zioun vai ends here  */}


            {/* hasib starts here  */}
            <div className='flex gap-5 mt-5'>
                <Link href="" className="block w-[50%] h-[250px]">
                    
                <Mobile ></Mobile>
                </Link>

                <Link href="" className="block w-[50%] h-[250px]">
                    
                <Computers></Computers>
                </Link>
            </div>


            <div className='flex justify-center mt-4'>
                <Link href="" className="block w-[50%] h-[250px]">
                    
                <Electronics></Electronics>
                </Link>
            </div>
            <div className='flex gap-5 mt-5'>

                <Link href="" className="block w-[50%] h-[250px]">
                    
                <House></House>
                </Link>

                <Link href="" className="block w-[50%] h-[250px]">
                    
                <Garden></Garden>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;