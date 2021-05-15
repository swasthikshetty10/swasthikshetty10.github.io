import React from 'react'
import Slide from 'react-reveal/Slide';
function Form() {
    return (
        
       
          
        <div className = "font-sans flex-grow  m-5 p-10  border-2  border-blue-700   lg:pb-20 lg:pt-10 lg:pl-10 lg:pr-10  bg-gray-100 rounded-xl " style = {{ maxWidth : "600px"}}>
            <div className = "flex justify-center"><h2 className = " text-2xl pb-10 pt-5"> Send me a  message 🙂</h2></div>
            
        <form onSubmit = {(e) => { console.log(e.target.value)}}>
            <div className = "name flex flex-col md:flex lg:flex  ">
                <div className = "flex flex-col mr-5">
                <label>Name</label>
                <input className = " border-2 border-opacity-60 border-blue-500  rounded-md p-1 lg:w-8/12 " type = "text" />
                </div>
                
            </div>

            <div>
            <div className = "flex flex-col mt-5">
                <label className="block">
                <span className="">Email</span>
                <input className = "  border-2 border-opacity-60 border-blue-500 2 rounded-md p-2 w-full form-input mt-1 block w-full" type="email"  />
                </label>
            </div>
            <div className = "flex flex-col mt-5">
                <label className="block">
                <span className="">Contact Number</span>
                <input className = "  border-2 border-opacity-60 border-blue-500 2 rounded-md p-2 w-full form-input mt-1 block w-full" type="text" />
                </label>
            </div>
            
            </div> 
            <div  className = "flex flex-col mt-5">
            <label className="block">
            <span classNmae="text-gray-700">Message</span>
            <textarea  className=" border-2 border-opacity-60  form-textarea mt-1 block w-full border-blue-600 rounded-md p-1 " rows="4" placeholder="message . . ."></textarea>
            
            </label>
                <button style = {{ border : "none"}}type = "submit" class="mt-5 border-none bg-blue-500 w-30 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Submit
                    </button>
            </div>
        </form>
        </div>

       
        
       
    )
}

export default Form
