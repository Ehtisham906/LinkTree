"use client"
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Generate = () => {
    const [link, setLink] = useState("");
    const [linktext, setLinktext] = useState("");
    const [handle, setHandle] = useState("");


    const addLink = async (text, link, handle) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "link": link,
            "linktext": text,
            "handle": handle
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const r = await fetch("http://localhost:3000/api/add", requestOptions)
        const result = await r.json();
        toast(r.message)
    }

    return (
        <div className='min-h-screen grid grid-cols-2'>

            <div className="col1 ml-[10vw] flex justify-center items-center flex-col gap-5 text-gray-700">
                <div className='flex flex-col gap-5 my-8'>
                    <h1 className='font-bold text-4xl'>Create Your Linktree</h1>
                    <div className="item">
                        <h2 className='font-semibold text-2xl'>Step 1 : Claim your handle</h2>
                        <div className="mx-4">
                            <input value={handle || ""} onChange={e => setHandle(e.target.value)} className="px-4 py-2 my-2 focus:outline-pink-500 rounded-3xl" type="text" placeholder='Choose a handle' name="" id="" />
                        </div>
                    </div>

                    <div className="item">
                        <h2 className='font-semibold text-2xl'>Step 2 : Add links</h2>
                        <div className="mx-4">
                            <input value={handle || ""} onChange={e => setLink(e.target.value)} className="px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-3xl " type="text" placeholder='Enter link text' />
                            <input className="px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-3xl " type="text" placeholder='Enter link ' />
                            <button className='py-2 mx-2 bg-slate-700 text-white rounded-3xl p-5'>Add Link</button>
                        </div>
                    </div>

                    <div className="item">
                        <h2 className='font-semibold text-2xl'>Step 3 : Add Picture and finalize</h2>
                        <div className="mx-4 flex flex-col">
                            <input className="px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-3xl " type="text" placeholder='Enter link to your picture' />
                            <button className='p-5 py-2 w-fit my-5 bg-slate-900 text-white font-bold rounded-3xl'>Create your linktree</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col2 mr-[10vw]">
                <img className='h-full  object-contain' src="/generate.png" alt="generate your links" />
                <ToastContainer />
            </div>
        </div>
    )
}

export default Generate
