import React from 'react'
import Navbar from './Navbar'
import OrderForm from './OrderForm'

function Index() {
    return (
        <>
            <Navbar />
            <div className="absolute w-full h-1/2 bg-gray-900" style={{ zIndex: '-1' }} >

            </div>
            <div className=" p-3 sm:p-10" >
                <div className="mb-10  text-white">
                    <p className='text-center text-3xl md:text-4xl font-bold'>Hi lets get started 🔥</p>
                </div>
                <OrderForm />

            </div>

        </>
    )
}

export default Index
