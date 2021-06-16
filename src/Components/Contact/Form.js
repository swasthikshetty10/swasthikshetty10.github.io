import React, { useState } from 'react'
import Slide from 'react-reveal/Slide';
import axios from 'axios';
import { urls } from '../../config'
import Popup from 'react-popup'
import DataUsageIcon from '@material-ui/icons/DataUsage';
import DoneIcon from '@material-ui/icons/Done';
function Form() {
    const SuccessDiv = React.useRef();

    const [isLoading, setLoading] = useState(false);
    const FormSubmitHandler = (e) => {
        e.preventDefault();
        setLoading(true)
        const data = {
            name: e.target[0].value,
            email: e.target[1].value,
            phone_no: e.target[2].value,
            message: e.target[3].value
        }

        axios.post(urls.contact, data)
            .then(res => {
                console.log(res);
                console.log(res.data);
                setLoading(false)
                SuccessDiv.current.innerHTML = `<p class="font-semibold text-green-600">Thankyou your message has been sent ✔️ </p>`
                e.target[0].value = ""
                e.target[1].value = ""
                e.target[2].value = ""
                e.target[3].value = ""
            })
            .catch(err => {
                setLoading(false);
                SuccessDiv.current.innerHTML = `<p class="font-semibold text-red-600">Sorry something went wrong Try again</p>`
            })

        console.log(data)


    }
    return (
        <div className="font-sans flex-grow  m-5 p-5 md:p-10 lg:p-10  border-2  border-blue-700   lg:pb-20 lg:pt-10 lg:pl-10 lg:pr-10  bg-gray-100 rounded-xl " style={{ maxWidth: "600px" }}>
            <div className="flex justify-center"><h2 className=" text-2xl pb-5 md:pb-10 lg:pb-10 pt-5"> Send me a  message 🙂</h2></div>

            <form onSubmit={FormSubmitHandler} >
                <div className="name flex flex-col md:flex lg:flex  ">
                    <div className="flex flex-col mr-5">
                        <label>Name</label>
                        <input className="outline-none border-2 border-opacity-60 border-blue-500  rounded-md p-1 lg:w-8/12 " type="text" required disabled={isLoading} />
                    </div>

                </div>

                <div>
                    <div className="flex flex-col mt-5">
                        <label className="block">
                            <span className="">Email</span>
                            <input className="outline-none  border-2 border-opacity-60 border-blue-500 2 rounded-md p-2 w-full form-input mt-1 block w-full" type="email" required disabled={isLoading} />
                        </label>
                    </div>
                    <div className="flex flex-col mt-5">
                        <label className="block">
                            <span className="">Contact Number</span>
                            <input className="outline-none border-2 border-opacity-60 border-blue-500 2 rounded-md p-2 w-full form-input mt-1 block w-full" type="text" disabled={isLoading} />
                        </label>
                    </div>

                </div>
                <div className="flex flex-col mt-5">
                    <label className="block">
                        <span classNmae="text-gray-700">Message</span>
                        <textarea className="outline-none border-2 border-opacity-60  form-textarea mt-1 block w-full border-blue-600 rounded-md p-1 " rows="4" placeholder="message . . ." disabled={isLoading}  ></textarea>

                    </label>
                    <button onClick={() => { console.log(urls) }} type="submit" className="focus:outline-none  mt-5  bg-blue-500 w-30 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" disabled={isLoading}>
                        {isLoading ? <> <DataUsageIcon className="animate-spin" /> sending</> : 'Submit'}
                    </button>
                    <div className="text-center mt-3" ref={SuccessDiv}>

                    </div>
                </div>
            </form>
        </div>




    )
}

export default Form
