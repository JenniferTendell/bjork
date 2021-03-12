import { Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import CheckOut from "./checkOut/checkOut"
import MasterView from "./masterView";

function Main() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/">
                    <MasterView />
                </Route>
                <Route path="/checkOut/">
                    <CheckOut />
                </Route>
            </Switch>
        </Suspense>
    )
}

export default Main;