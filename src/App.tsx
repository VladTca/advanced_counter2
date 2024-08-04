import './App.css'
import {ChangeEvent, useEffect, useState} from "react";
import {Button} from "./Button";
import {Tablo} from "./Tablo";
import {Input} from "./Input";



function App() {
    const getInitialCifra = () => {
        const savedCifra = localStorage.getItem('cifra');
        const savedStart = localStorage.getItem('start_value');
        return savedCifra ? Number(savedCifra) : Number(savedStart);
    };

    const [cifra, setCifra] = useState(getInitialCifra)
    const [maxi, setMax] = useState(10)
    const [start_value, setStart] = useState(0)
    const [dis, setDisabled] = useState(false)
    const [toggle, setToggle] = useState(true)

    const [isFirstRender, setIsFirstRender] = useState(true)

    useEffect(() => {
        if (isFirstRender) {
            const max = localStorage.getItem('maxi')
            const start = localStorage.getItem('start_value')
            // const cifer = localStorage.getItem('cifra')
            if (start && max) {
                setStart(Number(start))

                setMax(Number(max))
                setDisabled(true)
                // if (cifer !== null) {
                //     setCifra(Number(cifer))
                // } else {
                //     setCifra(Number(start))
                // }

            }
        }
        setIsFirstRender(false)

    }, [isFirstRender])

    useEffect(() => {
        localStorage.setItem('cifra', JSON.stringify(cifra))

    }, [cifra])


    const Increment = () => {
        setCifra(cifra + 1)
    }
    const Reset = () => {
        setCifra(0)
        setStart(0)
        setMax(10)
        setDisabled(false)
        localStorage.clear()
    }

    const OnStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (Number(e.currentTarget.value) < 0) {
            setDisabled(true)
        }
        if (Number(e.currentTarget.value) >= maxi) {
            setDisabled(true)
        }
        if (Number(e.currentTarget.value) >= 0 && Number(e.currentTarget.value) < maxi) {
            setDisabled(false)
        }


        setStart(Number(e.currentTarget.value))

    }

    const OnMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (Number(e.currentTarget.value) <= start_value) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
        setMax(Number(e.currentTarget.value))

    }


    const SetStartValueHandler = () => {
        setCifra(start_value)
        localStorage.setItem('maxi', JSON.stringify(maxi))
        localStorage.setItem('start_value', JSON.stringify(start_value))
        setDisabled(true)
        setToggle(!toggle)
    }


    const SwitchToggle = () => {
        setToggle(!toggle)

    }

    return (
        <div className={'total'}>
            {toggle ? (

                    <div className={'counter'}>

                        <div className={'cifra'}>
                            <Tablo cifra={cifra} max={maxi} start_value={start_value} disabled={dis}/>
                        </div>

                        <div className={'footer'}>
                            <Button disabled={cifra === maxi} name={'Inc'} onClick={Increment}/>
                            <Button disabled={cifra === 0} name={'Reset'} onClick={Reset}/>
                            <Button disabled={dis} name={"Set"} onClick={SwitchToggle}/>
                        </div>
                    </div>
            )
                :
                (

                    <div className={'counter'}>

                        <div className={'settings'}>
                            <Input startValue={start_value} maxi={maxi} value={maxi} name={'Max Value'}
                                   onChange={OnMaxHandler}/>
                            <Input startValue={start_value} maxi={maxi} name={'Start Value'} value={start_value}
                                   onChange={OnStartHandler}/>

                        </div>

                        <div className={'footer'}>
                            <Button disabled={dis} name={'Set'} onClick={SetStartValueHandler}/>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default App
