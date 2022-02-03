import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCards } from "../../App/Reducers/cards";


export default function CardList () {
    return <Layout/>   
}

function Layout() {
    const { entities, loading } = useSelector (state => state.cards); 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCards())
    },[dispatch])
    
    if (loading) {
        return (
            <div className="main__list-container">
                <div className="main__cards-container">
                    <h1>Список пользователей</h1>
                    <div className="loading">Загрузка...</div>
                </div>
            </div>
        )
    }

    return (
        <div className="main__list-container">
            <div className="main__cards-container">
                <h1>Список пользователей</h1>
                {entities.map(card => {
                    return (
                            <Card key={card.id} id={card.id} name={card.name} city={card.address.city} company={card.company.name}/>
                        )
                })}
            </div>
        </div>
    )
}