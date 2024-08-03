import './App.css'

type Props = {
    name: string
    onClick: () => void
    disabled?: boolean
};
export const Button = (props: Props) => {
    return (
        <div>
<button className={'button'} disabled={props.disabled} onClick={props.onClick}>{props.name}</button>
        </div>
    );
};