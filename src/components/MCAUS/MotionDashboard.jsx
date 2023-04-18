import React from 'react'
import MotionQues from './MotionForm'
import MCAUSTopics from './MCAUSTopics'

const DoYou = () => {
    return (
        <>
            <div className='container mt-20  mx-auto grid  lg:grid-cols-2 gap-4'>
                <div className='flex justify-center'>
                    <div className="lg:w-full lg:ml-28">
                        <MotionQues />
                    </div>
                </div>
                <MCAUSTopics />
            </div>
        </>
    )
}

export default DoYou
