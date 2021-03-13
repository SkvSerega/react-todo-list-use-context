import React from "react";
import "./card.css";

type Props = {
    title?: string;
}

const Card: React.FC<Props> = (props) => {

    return (
        <div className="card">
            {props.title && (
                <span className="card-title">
                    {props.title} <span className="card-title__prefix">@SkvSerega</span>
                </span>
            )}
            {props.children}
        </div>
    )
}

export default Card;
