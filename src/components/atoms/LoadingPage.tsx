import React, { useState, useEffect } from 'react'
import RingLoader from "react-spinners/RingLoader";



const LoadingPage = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 10000)
    }, [])
    return (
        <div>
            {
                loading ?
                    <RingLoader
                        color={"hsla(288, 84%, 38%, 1)"}
                        loading={loading}
                        size={70}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                        className='fixed ml-[620px] mt-[100px] z-[99999999px]'
                    />
                    :
                    <div></div>
            }
        </div>
    )
}

export default LoadingPage