import React from "react";
import { useEffect, useState, useCallback } from 'react';

const Clock = (props) => {
    const { timeZone } = props;

    const getTime = useCallback(() => {
        let newTime = new Date();

        return new Date(newTime.toLocaleString('en-US', { timeZone }));
    }, [timeZone]);

    const [time, setTime] = useState(getTime());

    const tick = useCallback(() => {
        setTime(getTime());
    }, [getTime]);

    useEffect(() => {
        const interval = setInterval(() => tick(), 1000);
        
        return () => clearInterval(interval);
    }, [tick]);

    return (
        <>
            {time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
        </>
    );
}

export default Clock;
