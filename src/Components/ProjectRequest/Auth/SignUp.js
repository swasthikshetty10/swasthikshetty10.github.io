import React from 'react'

function SignIn() {
    return (
        <div>
            <form className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Sign Up</h1>
                        <input
                            type="text"
                            className="block border focus:outline-none border-gray-light focus:border-green-500 w-full p-3 rounded mb-4"
                            name="fullname"
                            placeholder="Full Name" required />

                        <input
                            type="text"
                            className="block border focus:outline-none border-gray-light focus:border-green-500 w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" required />

                        <input
                            type="password"
                            className="block border focus:outline-none border-gray-light focus:border-green-500 w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" required />
                        <input
                            type="password"
                            className="block border focus:outline-none border-gray-light focus:border-green-500 w-full p-3 rounded mb-4"
                            name="confirm_password"
                            placeholder="Confirm Password" required />

                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-indigo-600 hover:bg-indigo-700 text-white hover:bg-green-dark focus:outline-none my-1"
                        >Create Account</button>


                    </div>

                    <div className="text-grey-dark mt-6">
                        Already have an account?
                        <a className="no-underline border-b border-blue text-blue-700" href="../login/">
                            Log in
                        </a>.
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignIn
