import './App.css'

type Props = {
    cifra: number
    max: number
    start_value: number
    disabled?: boolean
};
export const Tablo = (props: Props) => {
    return (
        <div style={{
            color:
                (props.cifra >= 0 && props.cifra < props.max)
                && (props.start_value >= 0)
                && (props.start_value < props.max)
                    ? "currentcolor"
                    : 'red'

        }}>
            {props.start_value < 0 || props.start_value >= props.max ? "Incorrect value"
                : props.disabled ? props.cifra
                    : "Enter values and press 'Set'"
                }
        </div>
    );
};