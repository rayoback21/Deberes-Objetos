import {FC} from "react";
import './OompaLoompa.css';

interface OompaLoompaProps {
    orders: string;
    onOrderChange: () => void;
}

// OompaLoompa is the child component that receives the event handler via props
export const OompaLoompaEvent: FC<OompaLoompaProps> = ({ orders, onOrderChange }) => {
    return (<div className="backgroundOompaLoompa">
        <h1 className="oompaLoompa">{orders}</h1>
        <button onClick={onOrderChange}>Change Orders</button>
        <h1>Oompa Loompa Working... 👷🏻‍♀️⚒️👷🏻‍♀️⚒️👷🏻‍♀️⚒️</h1>
    </div>);
};