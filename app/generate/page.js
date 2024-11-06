import React from 'react'

const Generate = () => {
    return (
        <div className='min-h-screen grid grid-cols-2'>
            <div className="col1 flex justify-center items-center flex-col gap-5 text-gray-700">
                <div className='flex flex-col gap-5 my-8'>
                    <h1 className='font-bold text-4xl'>Create Your Linktree</h1>
                    <div className="item">
                        <h2 className='font-semibold text-2xl'>Step 1 : Claim your handle</h2>
                        <div className="mx-4">
                            <input className="px-4 py-2 my-2 focus:outline-pink-500 rounded-3xl" type="text" placeholder='Choose a handle' name="" id="" />
                        </div>
                    </div>

                    <div className="item">
                        <h2 className='font-semibold text-2xl'>Step 2 : Add links</h2>
                        <div className="mx-4">
                            <input className="px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-3xl " type="text" placeholder='Enter link text' />
                            <input className="px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-3xl " type="text" placeholder='Enter link ' />
                            <button className='py-2 mx-2 bg-slate-700 text-white rounded-3xl p-5'>Add Link</button>
                        </div>
                    </div>

                    <div className="item">
                        <h2 className='font-semibold text-2xl'>Step 3 : Add Picture and finalize</h2>
                        <div className="mx-4">
                            <input className="px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-3xl " type="text" placeholder='Enter link to your picture' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col2">
                <img className='h-full object-contain' src="/generate.png" alt="generate your links" />
            </div>
        </div>
    )
}

export default Generate
