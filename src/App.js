import { Route } from "react-router";
import { Switch } from "react-router";

import NewMeetupPage from "./pages/NewMeetup";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
    return (
        <div>
            <MainNavigation/>
            <Switch>
                <Route path='/' exact>
                    <AllMeetupsPage />
                </Route>
                <Route path='/new-meetup'>
                    <NewMeetupPage />
                </Route>
                <Route path='/favorites'>
                    <FavoritesPage />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
