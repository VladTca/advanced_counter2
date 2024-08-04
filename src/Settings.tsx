import {Input} from "./Input";
import {Button} from "./Button";

export function Settings(props: {
    startValue: number,
    maxi: number,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onChange1: (e: React.ChangeEvent<HTMLInputElement>) => void,
    disabled: boolean,
    onClick: () => void
}) {
    return <div className={"counter"}>

        <div className={"settings"}>
            <Input startValue={props.startValue} maxi={props.maxi} value={props.maxi} name={"Max Value"}
                   onChange={props.onChange}/>
            <Input startValue={props.startValue} maxi={props.maxi} name={"Start Value"} value={props.startValue}
                   onChange={props.onChange1}/>

        </div>

        <div className={"footer"}>
            <Button disabled={props.disabled} name={"Set"} onClick={props.onClick}/>
        </div>
    </div>;
}