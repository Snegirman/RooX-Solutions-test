import { Outlet, Route, Routes } from "react-router-dom";
import FilterContainer from "./Aside/FilterContainer";
import CardList from "./List/CardList";
import User from "./User/User";

function Main() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/:userId" element={<User/>}/>
                <Route index path="/" element={<CardList/>}/>
            </Route>
        </Routes>
    );
}

export default Main;

function Layout () {
    return (
        <div className="main">
            <aside className="main__aside">
                <FilterContainer/>
            </aside>
            <div className="main__list">
                <Outlet/>
            </div>
        </div>
    );
}