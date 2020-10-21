import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

export const UserContext = createContext();

function App() {
	const [loggedInUser, setLoggedInUser] = useState({});
	const globalStates = {
		user: [loggedInUser, setLoggedInUser],
	};

	return (
		<UserContext.Provider value={globalStates}>
			<Router>
				<Switch>
					<Route exact path="/">
						<HomePage></HomePage>
					</Route>
					<Route path="/login">
						<Login></Login>
					</Route>
					<PrivateRoute exact path="/dashboard">
						<Dashboard></Dashboard>
					</PrivateRoute>
				</Switch>
			</Router>
		</UserContext.Provider>
	);
}

export default App;