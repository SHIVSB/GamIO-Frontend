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
import Allplayers from "./components/players/allplayers";
import Namecard from "./screens/namecard/namecard";
import ChangeEmail from "./screens/changeEmail/changeEmail";
import Chat from "./components/socket/chat/chat";
import OriginalNavbar from "./components/navbar/originalNavbar";
import Posts from "./components/posts/posts";
import CategoryExtension from "./screens/categoryExtension/categoryExtension";
import Videocall from "./components/Webrtc/Videocall";
import ImageUploader from "./components/profile/Uploadphoto";
import NewPost from "./components/posts/newPost";

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
        <Route
          exact
          path="/allplayers"
          element={
            <Suspense fallback={<div></div>}>
              <Allplayers />
            </Suspense>
          }
        />

        <Route
          exact
          path="/changename"
          element={
            <Suspense fallback={<div></div>}>
              <Namecard />
            </Suspense>
          }
        />

        <Route
          exact
          path="/changemail"
          element={
            <Suspense fallback={<div></div>}>
              <ChangeEmail />
            </Suspense>
          }
        />
        <Route
          exact
          path="/chat"
          element={
            <Suspense fallback={<div></div>}>
              <Chat />
            </Suspense>
          }
        />
        <Route
          exact
          path="/originalnavbar"
          element={
            <Suspense fallback={<div></div>}>
              <OriginalNavbar />
            </Suspense>
          }
        />
        <Route
          exact
          path="/posts"
          element={
            <Suspense fallback={<div></div>}>
              <Posts />
            </Suspense>
          }
        />
        <Route
          exact
          path="/categories"
          element={
            <Suspense fallback={<div></div>}>
              <CategoryExtension />
            </Suspense>
          }
        />
        <Route
          exact
          path="/videocall"
          element={
            <Suspense fallback={<div></div>}>
              <Videocall />
            </Suspense>
          }
        />
        <Route
          exact
          path="/uploadphoto"
          element={
            <Suspense fallback={<div></div>}>
              <ImageUploader />
            </Suspense>
          }
        />
        <Route
          exact
          path="/newpost"
          element={
            <Suspense fallback={<div></div>}>
              <NewPost />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
