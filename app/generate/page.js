import React from 'react'

const Generate = () => {
    return (
        <div className='min-h-screen grid grid-cols-2'>
            <div className="col1 flex justify-center items-center flex-col gap-5">
                <h1 className='font-bold text-4xl'>Create Your Linktree</h1>
                <div className='flex flex-col gap-5'>
                    <input className="px-4 py-4 focus:outline-pink-500 rounded-3xl" type="text" placeholder='Enter link text' name="" id="" />
                    <input type="text" placeholder='Enter link ' name="" id="" />
                </div>
            </div>
            <div className="col2">
                <img className='h-full object-contain' src="/generate.png" alt="generate your links" />
            </div>
        </div>
    )
}

export default Generate
