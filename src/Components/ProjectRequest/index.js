import React from 'react'
import Navbar from './Navbar'
import OrderForm from './OrderForm'

function Index() {
    return (
        <>
            <Navbar />
            <div className="absolute -mt-20 w-full h-2/3" style={{ zIndex: '-1', background: "linear-gradient(90deg, #030157 10%, #3392FF 100%)" }} >

            </div>
            <div className=" p-3 sm:p-10" >
                <div className="pb-10  text-white">
                    <p className='text-center text-3xl md:text-4xl font-bold'>Hi lets get started 🔥</p>
                </div>
                <OrderForm />

            </div>

        </>
    )
}

export default Index
