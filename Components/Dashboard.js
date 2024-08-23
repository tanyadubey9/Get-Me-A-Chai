"use client"
import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { fetchuser, updateProfile } from '@/actions/useractions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
    const { data: session , update} = useSession();
    const router = useRouter();
    const [form, setForm] = useState({})

    useEffect(() => {
        if (!session) {
            router.push('/login')
        } else {
            getData()
        }
    }, [router, session])

    const getData = async () => {
        const u = await fetchuser(session.user.name)
        setForm(u)
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        let a = await updateProfile(e, session.user.name)
        toast("Profile Updated")
    }

    return (
        <>
        <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
/>    
            <ToastContainer />
            <div className='w-full pt-10 flex flex-col items-center'>
                <h1 className='text-3xl font-bold text-center'>Welcome to your Dashboard</h1>
                <div className='w-3/4 md:w-1/2 p-2 min-h-[80vh]'>
                    <form action={handleSubmit}>
                        <div className="mb-5">
                            <label htmlFor="name" className="block mb-2 font-medium text-gray-900 dark:text-white">Name</label>
                            <input name="name" value={form.name?form.name: ""} onChange={handleChange} type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 font-medium text-gray-900 dark:text-white">Your email</label>
                            <input name="email" value={form.email?form.email: ""} onChange={handleChange} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="username" className="block mb-2 font-medium text-gray-900 dark:text-white">Username</label>
                            <input name="username" value={form.username?form.username: ""} onChange={handleChange} type="text" id="username" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="profilepic" className="block mb-2 font-medium text-gray-900 dark:text-white">Profile Pic</label>
                            <input name="profilepic" value={form.profilepic?form.profilepic: ""} onChange={handleChange} type="text" id="profilepic" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="coverpic" className="block mb-2 font-medium text-gray-900 dark:text-white">Cover Pic</label>
                            <input name="coverpic" value={form.coverpic?form.coverpic: ""} onChange={handleChange} type="text" id="coverpic" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="razorpayid" className="block mb-2 font-medium text-gray-900 dark:text-white">Razorpay Id</label>
                            <input name="razorpayid" value={form.razorpayid ? form.razorpayid : ""} onChange={handleChange} type="text" id="razorpayid" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="razorpaysecret" className="block mb-2 font-medium text-gray-900 dark:text-white">Razorpay Secret</label>
                            <input name="razorpaysecret" value={form.razorpaysecret ? form.razorpaysecret : ""} onChange={handleChange} type="text" id="razorpaysecret" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <button type="submit" className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Dashboard
