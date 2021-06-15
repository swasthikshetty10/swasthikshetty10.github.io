import React from 'react'
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';






function OrderForm() {

    return (
        <div className="flex  justify-center ">
            <form className="flex gap-10 flex-col font-medium p-5 md:p-10 rounded-lg shadow-xl bg-white">
                <div className="form-control flex flex-col " >
                    <label className="text-xl py-2 ">Choose a name for your project</label>
                    <input name="project_name" placeholder="e.g. Build me cool website " className="p-3 focus:border-green-700  focus:outline-none md:px-5 border border-indigo-500" type="text" required></input>
                </div>
                <div className="form-control flex flex-col" >
                    <label className="text-xl ">Tell me more about your project</label>
                    <p className="text-md font-normal py-1">Start with a bit about yourself or your business, and include an overview of what you need done.</p>
                    <textarea name="description" placeholder="Describe your project here.." className="w-full focus:border-green-700 focus:outline-none h-20 md:h-32 p-3 md:px-5 border border-indigo-500" required></textarea>
                </div>
                <div className="form-control flex flex-col" >
                    <label className="text-xl py-2">Project budget</label>
                    <div className="flex w-40 focus:border-green-700  focus:outline-none md:p-2 border border-indigo-500">
                        <div class=" border  border-indigo-500">
                            <select name="currency_type ">
                                <option value="inr">₹</option>
                                <option value="usd">$</option>
                            </select>
                        </div>

                        <input name="budget" placeholder="amount" min='0' type="number" className="focus:outline-none px-2 w-full"></input>
                    </div>
                </div>
                <div className="form-control flex flex-col" >
                    <label className="text-xl ">Final date</label>
                    <p className="text-md font-normal py-1">Pick a date on or before your project must be completed</p>
                    <input name="date" min={date()} type="date" className="w-48 focus:border-green-700  focus:outline-none md:p-2 border border-indigo-500"></input>
                </div>
                <div className="form-controlflex flex-row gap-5" >
                    <div className="w-full">
                        <div className="relative border-dotted h-32   border-2 border-indigo-500  flex justify-center items-center">
                            <div className="absolute">
                                <div className="flex flex-row gap-5 justify-evenly  p-3 items-center">
                                    <FolderOutlinedIcon style={{ fontSize: "5rem", opacity: "60%", color: "gray" }} />
                                    <span className="block text-base font-normal opacity-50 md:block">Drag & drop any images or documents that might be helpful in explaining
                                        your brief here (Max file size: 25 MB)</span>
                                    <span className="hidden text-base font-normal opacity-50 md:hidden">Choose any file that might be helpful(Max file size: 25 MB)</span>
                                </div>
                            </div> <input name="reference_files" type="file" className="h-full w-full opacity-0" name="" />
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

const date = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }

    today = yyyy + '-' + mm + '-' + dd;
    return today
}