import React, { useEffect, useState } from 'react'

const TimeComponent = () => {

    const [currentTime, setCurrentTime] = useState("")
    const [currentDay, setCurrentDay] = useState("")

    useEffect(() => {
        const option = {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false, // 👈 disables AM/PM
        };
        const interval = setInterval(() => {
            const timeRaw = new Date().getTime();
            const time = new Date(timeRaw).toLocaleDateString("en-US", option)
            const dayRaw = new Date()
            const day = new Date(dayRaw).toLocaleDateString("id", {weekday: 'long'})
            setCurrentTime(time)
            setCurrentDay(day)
        }, 1000);

        return () => clearInterval(interval)
    },[])

    return (
        <div className='mt-1 ps-2 ps-xl-0' style={{fontSize:'20px', width: "230px" }}>
            {currentDay} {currentTime}
        </div>
    )
}

export default TimeComponent
