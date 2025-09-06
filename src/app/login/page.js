"use client"
import { useState } from "react";

const Login = () => {
    const [credentials, setcredentials] = useState(

        {

            email: "",
            password: ""
        }
    )
    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")
    const handlechange = (e) => {

        const value = e.target.value;
        const name = e.target.name;
        console.log(value)
        if (name == "email") { setemail(value) }
        else if (name == "password") {

            setpass(value)
        }
        // setcredentials([...credentials, value])
        // = e.target.name;

    }
    const handlesubmit = (e) => {
        e.preventDefault();
        if (!email || !pass) {
            alert("Please fill all the fields")
        } else {
            alert("Form Submitted")
            console.log("credentials", email, pass)
            setemail("")
            setpass("")
        }

    }
    return (<div>



        <div className="w-1/2 m-auto bg-[#e1e1e0d6] mt-20 rounded-xl p-5">

            <p className="text-center py-5 text-xl font-semibold">Login to Etoro</p>

            <form onSubmit={handlesubmit}>
                <div className="flex flex-col gap-2">

                    <label className="text-xl py-1 font-semibold">Email:</label>

                    <input type="email" placeholder="Enter Your Email" className="border p-1 rounded" onChange={handlechange} value={email} name="email" required />

                    <label className="text-xl py-1 font-semibold">Password:</label>
                    <input type="password" name="password" className="border p-1 rounded" placeholder="Enter Your Password" onChange={handlechange} value={pass} required />
                    <div className="flex justify-center items-center pt-3">

                        <button className=" bg-amber-500 px-4 py-1 rounded-xl text-white hover:font-semibold cursor-pointer " type="submit">Login</button>


                    </div>
                </div>

            </form>

        </div>

    </div>)

}
export default Login;