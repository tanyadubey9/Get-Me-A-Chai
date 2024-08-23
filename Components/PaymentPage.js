"use client"
import React, { useState, useEffect } from 'react'
import Script from 'next/script'
import { useSession } from 'next-auth/react'
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'

const PaymentPage = ({ username }) => {
    // const { data: session } = useSession()
    const [paymentform, setPaymentform] = useState({})
    const [currentUser, setCurrentUser] = useState({})
    const [payments, setPayments] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (searchParams.get("paymentdone") == "true") {
            toast('Thanks for your Donation!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        router.push(`/${username}`)
    }, [])


    const handleChange = (e) => {
        // const { data: session } = useSession()
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const getData = async () => {
        let u = await fetchuser(username);
        setCurrentUser(u);
        let dbpayments = await fetchpayments(username);
        setPayments(dbpayments);
        // console.log(u, dbpayments);
    };

    const pay = async (amount) => {
        // Get the order id
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        var options = {
            "key": currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Get Me A Chai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Tanya Dubey", //your customer's name
                "email": "tanyadubey@5005.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();
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
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className="cover w-full relative flex flex-col items-center">
                <img className='object-cover w-full h-72 md:h-80' src={currentUser.coverpic} alt="p" />
                <div className="profile absolute top-1/4 border-2 border-white overflow-hidden rounded-full md:size-36 size-28">
                    <img className='rounded-full md:size-36 size-28 md:w-[150px] md:h-[150px] w-[110px] h-[110px] ' src={currentUser.profilepic} alt="cute" />
                </div>
                <div className='text-center mb-5 md:mt-14 mt-16'>
                    <div className='my-3 md:text-3xl text-xl font-bold'>
                        @{username}
                    </div>
                    <h3 className='my-2 font-sans md:text-sm text-[13px]'>Let's help {username} get a Chai </h3>
                    <p className='my-1 font-thin md:text-sm text-[13px]'>{payments.length} Payments • ₹{payments.reduce((a, b) => a + b.amount, 0)} raised </p>
                </div>
                <div className="payment flex flex-col md:flex-row w-11/12 md:w-4/5 py-2 rounded-xl bg-red-50 h-[32rem] md:h-96 gap-5 md:gap-0">
                    <div className="supporters md:w-1/2 w-11/12 h-1/2 md:h-auto bg-slate-900 md:mx-2 mx-1 rounded-xl p-2 overflow-y-scroll">
                        <h2 className='font-bold text-xl md:text-2xl text-center m-3'> Top 10 Supporters </h2>
                        <ul className='md:m-3 text-slate-300'>
                            {payments.length == 0 && <li> No Payments Yet </li>}
                            {payments.map((p, i) => {
                                return <li key={i} className=' flex items-start gap-2 my-2 p-1 hover:border hover:border-slate-700 rounded-lg hover:bg-slate-800'>
                                    <img className='md:w-9 w-6 ' src="avatar.gif" alt="avatar" /> <span className='md:text-base text-sm'> {p.name} donated ₹{p.amount} with a message "{p.message}"</span></li>
                            })}
                        </ul>
                    </div>
                    <div className="makePayment bg-slate-900 md:w-1/2 w-11/12 h-1/2 md:h-auto mx-2 rounded-xl p-2 overflow-y-scroll">
                        <h2 className='font-bold text-xl md:text-2xl text-center m-3'> Make a Payment </h2>
                        <div className="flex gap-2 md:m-3 m-1 flex-col">
                            <input onChange={handleChange} value={paymentform.name} type="text" name='name' className='bg-slate-800 rounded-xl md:p-3 p-1.5 w-full border border-slate-700' placeholder='Enter Name' />
                            <input onChange={handleChange} value={paymentform.message} type="text" name='message' className='bg-slate-800 rounded-xl md:p-3 p-1.5 w-full border border-slate-700' placeholder='Enter Message' />
                            <input onChange={handleChange} value={paymentform.amount} type="text" name='amount' className='bg-slate-800 rounded-xl md:p-3 p-1.5 w-full border border-slate-700' placeholder='Enter Amount' />

                            <button onClick={() => pay(Number.parseInt(paymentform.amount) * 100)} type='button' className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm md:px-5 px-3.5 md:py-2.5 py-1.5 text-center md:me-2 mb-2 disabled:bg-slate-400 disabled:from-slate-500 disabled:to-slate-600" disabled={!paymentform.name || !paymentform.message || !paymentform.amount || paymentform.name.length < 3 || paymentform.message.length < 4} >Pay</button>
                        </div>
                        <div className='flex gap-2 mt-3 m-3'>
                            <button className='bg-slate-800 rounded-xl md:p-3 p-1.5 border border-slate-700 hover:bg-slate-700' onClick={() => pay(1000)}>Pay ₹10</button>
                            <button className='bg-slate-800 rounded-xl md:p-3 p-1.5 border border-slate-700 hover:bg-slate-700' onClick={() => pay(2000)}>Pay ₹20</button>
                            <button className='bg-slate-800 rounded-xl md:p-3 p-1.5 border border-slate-700 hover:bg-slate-700' onClick={() => pay(3000)}>Pay ₹30</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PaymentPage
