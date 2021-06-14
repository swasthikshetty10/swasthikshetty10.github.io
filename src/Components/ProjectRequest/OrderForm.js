import React from 'react'
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';
function OrderForm() {
    return (
        <div className="flex mt-20 justify-center ">
            <form className="flex gap-10 flex-col font-medium p-5 md:p-10 rounded-lg shadow-xl bg-white">
                <div className="flex flex-col " >
                    <label className="text-xl py-2 ">Choose a name for your project</label>
                    <input placeholder="e.g. Build me cool website " className="p-3 focus:border-green-700  focus:outline-none md:px-5 border border-indigo-500" type="text" required></input>
                </div>
                <div className="flex flex-col" >
                    <label className="text-xl ">Tell Me more about your project</label>
                    <p className="text-md font-normal py-1">Start with a bit about yourself or your business, and include an overview of what you need done.</p>
                    <textarea placeholder="Describe your project here.." className="w-full focus:border-green-700 focus:outline-none h-20 md:h-32 p-3 md:px-5 border border-indigo-500" required></textarea>
                </div>
                <div className="flex flex-col" >
                    <label className="text-xl py-2">Project budget</label>
                    <input placeholder="in INR" min='0' type="number" className="p-3 w-20  focus:border-green-700  focus:outline-none md:p-2 border border-indigo-500"></input>
                </div>
                <div className="flex flex-row gap-5" >
                    <div className="w-full">
                        <div className="relative border-dotted h-32   border-2 border-indigo-500  flex justify-center items-center">
                            <div className="absolute">
                                <div className="flex flex-row gap-5 justify-evenly  p-3 items-center">
                                    <FolderOutlinedIcon style={{ fontSize: "5rem", opacity: "60%", color: "gray" }} />
                                    <span className="text-base font-normal opacity-50">Drag & drop any images or documents that might be helpful in explaining
                                        your brief here (Max file size: 25 MB)</span> </div>
                            </div> <input type="file" className="h-full w-full opacity-0" name="" />
                        </div>
                    </div>

                </div>
                <div className="" >
                    {/* <label className="">Project Name</label>
                    <input className=""></input> */}
                    <button type="submit" className="focus:outline-none  mt-5  bg-indigo-500 w-30 hover:bg-blue-700 text-white font-bold py-2 px-4 " >
                        Submit {/* {isLoading ? <> <DataUsageIcon className="animate-spin" /> sending</> : 'Submit'} */}
                    </button>
                </div>

            </form>

        </div >
    )
}

export default OrderForm
