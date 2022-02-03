import { Link } from "react-router-dom";

export default function Card (props) {
    return (
            <div className="card">
                <div className="card__info-container">
                    <div className="card__info-name">ФИО:</div>
                    <div className="card__info-result">{props.name}</div>
                </div>
                <div className="card__info-container">
                    <div className="card__info-name">город:</div>
                    <div className="card__info-result">{props.city}</div>
                </div>
                <div className="card__info-container">
                    <div className="card__info-name">компания:</div>
                    <div className="card__info-result">{props.company}</div>
                    <Link to={`/${props.id}`}>Подробнее</Link>
                </div>
            </div>
    );
}