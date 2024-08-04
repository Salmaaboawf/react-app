import React, { useState, createContext } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { useNavigate, Link } from "react-router-dom";

const UserContext = createContext(null);

function Form() {
    const [user,setUser] = UserContext(UserContext);
    let [error, setError] = useState({ email: "", pass: "", pass2: "", phone: "" });
    let navigate = useNavigate();

    function changeData(e) {
        const { name, value } = e.target;

        if (name === "floating_email") {
            if (value.length < 5) {
                setError({ ...error, email: "Email length must be more than 5 characters." });
            } else {
                setUser({ ...user, email: value });
                setError({ ...error, email: "" });
            }
        } else if (name === "floating_password") {
            if (value.length < 7) {
                setError({ ...error, pass: "Password must be more than 7 characters." });
            } else {
                setUser({ ...user, pass: value });
                setError({ ...error, pass: "" });
            }
        } else if (name === "repeat_password") {
            if (value !== user.pass) {
                setError({ ...error, pass2: "Password must match the original password." });
            } else {
                setUser({ ...user, pass2: value });
                setError({ ...error, pass2: "" });
            }
        } else if (name === "floating_phone") {
            if (value.length < 10) {
                setError({ ...error, phone: "Phone number must be at least 10 digits." });
            } else {
                setUser({ ...user, phone: value });
                setError({ ...error, phone: "" });
            }
        }
    }

    function go(e) {
        e.preventDefault(); 
        navigate("/product",);
    }

    return (
            <div className="w-80">
                <form className="w-full" style={{ backgroundColor: "#CABFFD", color: "#111827" }} onSubmit={go}>
                    <div className="relative z-0 w-full mb-5 group">
                        <TextInput
                            type="email"
                            onChange={changeData}
                            name="floating_email"
                            id="floating_email"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_email"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Email address
                        </label>
                        {error.email && <span className="text-red-500">{error.email}</span>}
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <TextInput
                            type="password"
                            onChange={changeData}
                            name="floating_password"
                            id="floating_password"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_password"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Password
                        </label>
                        {error.pass && <span className="text-red-500">{error.pass}</span>}
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <TextInput
                            type="password"
                            onChange={changeData}
                            name="repeat_password"
                            id="floating_repeat_password"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_repeat_password"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Confirm password
                        </label>
                        {error.pass2 && <span className="text-red-500">{error.pass2}</span>}
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <TextInput
                            type="tel"
                            onChange={changeData}
                            name="floating_phone"
                            id="floating_phone"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_phone"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Phone number (123-456-7890)
                        </label>
                        {error.phone && <span className="text-red-500">{error.phone}</span>}
                    </div>

                    <button
                        type="submit"
                        className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                        Submit
                    </button>
                </form>

                <div>User email: {user.email}</div>
                <div>User password: {user.pass}</div>
                <div>Confirm password: {user.pass2}</div>
                <div>User phone: {user.phone}</div>
            </div>
    );
}

export default Form;
