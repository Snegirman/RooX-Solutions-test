import Button from "./Button";
import { filterByCity } from "../../App/Reducers/cards";
import { filterByCompany } from "../../App/Reducers/cards";
import { useDispatch } from "react-redux";

function FilterContainer() {
    const dispatch = useDispatch();

    function clickHandlerCompany(){
        dispatch(filterByCompany());
    }
    
    function clickHandlerCity(){
        dispatch(filterByCity());
    }

    return (
        <div className="filter">
            <h2 className="filter__title">Сортировка</h2>
            <div className="filter__button-container">
                <Button click={clickHandlerCity} class="filter__button" title="по городу"/>
                <Button click={clickHandlerCompany} class="filter__button" title="по компании"/>
            </div>
        </div>
    );
}

export default FilterContainer;