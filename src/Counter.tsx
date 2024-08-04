import {Tablo} from "./Tablo";
import {Button} from "./Button";

export function Counter(props: {
    cifra: number,
    max: number,
    startValue: number,
    disabled: boolean,
    onClick: () => void,
    onClick1: () => void,
    onClick2: () => void
}) {
    return <div className={"counter"}>

        <div className={"cifra"}>
            <Tablo cifra={props.cifra} max={props.max} start_value={props.startValue} disabled={props.disabled}/>
        </div>

        <div className={"footer"}>
            <Button disabled={props.cifra === props.max} name={"Inc"} onClick={props.onClick}/>
            <Button disabled={props.cifra === 0} name={"Reset"} onClick={props.onClick1}/>
            <Button disabled={props.disabled} name={"Set"} onClick={props.onClick2}/>
        </div>
    </div>;
}