type Props = {
    startValue: number,
    maxi: number,
    name: string
    value: number
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
};



export function Input({startValue, maxi, name, onChange, value}: Props) {


    return <div className={"input_data"}>
        <div>{name}</div>
        <div>
            <input
                className={startValue < 0 || startValue >= maxi ? "input_data_error" : ""}
                type="number"
                value={value}
                onChange={onChange}/>
        </div>
    </div>;
}