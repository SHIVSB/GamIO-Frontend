import { Suspense } from "react";
// import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Dashboard from "./components/dashboard/dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Explore from "./components/explore/explore";
import Signup from "./components/signup/signup";
import Detail from "./components/gamedetail/gamedetail";
import Profile from "./components/profile/profile";
import Players from "./components/players/players";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<div></div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          exact
          path="/detail/:gameid"
          element={
            <Suspense fallback={<div></div>}>
              <Detail />
            </Suspense>
          }
        />
        <Route
          exact
          path="/dashboard"
          element={
            <Suspense fallback={<div></div>}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          exact
          path="/login"
          element={
            <Suspense fallback={<div></div>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          exact
          path="/signup"
          element={
            <Suspense fallback={<div></div>}>
              <Signup />
            </Suspense>
          }
        />
        <Route
          exact
          path="/explore"
          element={
            <Suspense fallback={<div></div>}>
              <Explore />
            </Suspense>
          }
        />
        <Route
          exact
          path="/profile"
          element={
            <Suspense fallback={<div></div>}>
              <Profile />
            </Suspense>
          }
        />
        <Route
          exact
          path="/players/:gameid"
          element={
            <Suspense fallback={<div></div>}>
              <Players />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
