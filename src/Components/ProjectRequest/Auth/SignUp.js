import React from 'react'
import { urls } from '../../../config'
import axios from 'axios'
import { axiosInstance } from '../../../axios';
import { data } from 'browserslist';
import { useHistory } from 'react-router-dom';
function SignIn() {
    const history = useHistory();
    const SignUpFormHandler = (e) => {
        e.preventDefault();
        const data = {
            "full_name": e.target[0].value,
            "email": e.target[1].value.trim(),
            "user_name": e.target[2].value,
            "password": e.target[3].value
        };
        console.log(data)
        axios.post(urls.signin, data)
            .then((res) => {
                history.push('/login');
                console.log(res);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err)

            })


    }
    return (
        <div>
            <form onSubmit={SignUpFormHandler} className="bg-grey-lighter min-h-screen flex flex-col">
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
                            type="text"
                            className="block border focus:outline-none border-gray-light focus:border-green-500 w-full p-3 rounded mb-4"
                            name="username"
                            placeholder="Username" required />

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
                        <a className="no-underline border-b border-blue text-blue-700" href="#/login/">
                            Log in
                        </a>.
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignIn
