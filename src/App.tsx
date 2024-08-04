import './App.css'
import {ChangeEvent, useEffect, useState} from "react";
import {Settings} from "./Settings";
import {Counter} from "./Counter";


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
                    <Counter cifra={cifra} max={maxi} startValue={start_value} disabled={dis} onClick={Increment}
                             onClick1={Reset} onClick2={SwitchToggle}/>
                )
                :
                (
                    <Settings startValue={start_value} maxi={maxi} onChange={OnMaxHandler} onChange1={OnStartHandler}
                              disabled={dis} onClick={SetStartValueHandler}/>
                )
            }
        </div>
    )
}

export default App
