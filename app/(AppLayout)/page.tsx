import HomePage from '@/components/home/HomePage';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import React from 'react';

const page = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <HomePage></HomePage>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default page;