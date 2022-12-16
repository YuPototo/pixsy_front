import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import ImagesPage from "./pages/ImagesPage";
import RegisterPage from "./pages/RegisterPage";
import TakeDownPage from "./pages/TakeDownPage";
import CasesPage from "./pages/CasesPage";
import MatchesPage from "./pages/MatchesPage";
import BaseLayout from "./components/BaseLayout";
import useActiveSideBarItem from "./hooks/useActiveSideBarItem";
import { ISideBarItem } from "./types";

function App() {
    const activeSideBarItem = useActiveSideBarItem() as ISideBarItem;

    return (
        <BaseLayout activeSideBar={activeSideBarItem}>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/images" />
                </Route>
                <Route path="/images">
                    <ImagesPage />
                </Route>
                <Route path="/matches">
                    <MatchesPage />
                </Route>
                <Route path="/cases">
                    <CasesPage />
                </Route>
                <Route path="/takedowns">
                    <TakeDownPage />
                </Route>
                <Route path="/register">
                    <RegisterPage />
                </Route>
            </Switch>
        </BaseLayout>
    );
}

export default App;
