import { useState, useEffect } from 'react';
import './Clock.css'

const Clock = ({ country, timezone }) => {

    const t = Date.now() + 3600 * timezone * 1000;

    const dateInit = new Date(t);

    const [date, setDate] = useState(dateInit);

    const [firstSecond, setFirstSecond] = useState(0);
    const [secondSecond, setSecondSecond] = useState(0);

    const [firstMinute, setFirstMinute] = useState(0);
    const [secondMinute, setSecondMinute] = useState(0);

    const [firstHour, setFirstHour] = useState(0);
    const [secondHour, setSecondHour] = useState(0);

    //const [nation, setNation] = useState(country);

    useEffect(() => {

        //setNation('Napoli');
        // codice da eseguire all'inizio oppure se cambia l'input
        const interval = setInterval(() => {
            const time = date.getTime() + 1000;
            setDate(new Date(time));

            const secs = date.getSeconds().toString().padStart(2, '0');
            setFirstSecond(secs.charAt(0));
            setSecondSecond(secs.charAt(1));

            const mins = date.getMinutes().toString().padStart(2, '0');
            setFirstMinute(mins.charAt(0));
            setSecondMinute(mins.charAt(1));

            const hh = date.getHours().toString().padStart(2, '0');
            setFirstHour(hh.charAt(0));
            setSecondHour(hh.charAt(1));

        }, 1000);
        return () => {
            // quando il componente viene tolto dal dom
            clearInterval(interval);
        };
    }, [date]); //se [] vuoto significa che viene eseguito solo una volta

    /*   setTimeout(() => {
          const t = date.getTime() + 3600 * 1000;
          setDate(new Date(t))
      }, 5000); */

    return (

        <>
            <h2>In {country} is</h2>

            <div className="clock">
                <div className="hours">
                    <div className="first">
                        <div className="number">{firstHour}</div>
                    </div>
                    <div className="second">
                        <div className="number">{secondHour}</div>
                    </div>
                </div>
                <div className="tick">:</div>
                <div className="minutes">
                    <div className="first">
                        <div className="number">{firstMinute}</div>
                    </div>
                    <div className="second">
                        <div className="number">{secondMinute}</div>
                    </div>
                </div>
                <div className="tick">:</div>
                <div className="seconds">
                    <div className="first">
                        <div className="number">{firstSecond}</div>
                    </div>
                    <div className="second infinite">
                        <div className="number">{secondSecond}</div>
                    </div>
                </div>
            </div>
        </>

    );


};

export default Clock;