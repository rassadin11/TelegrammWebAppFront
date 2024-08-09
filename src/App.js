
import { Route, Routes } from "react-router-dom";
import Header from "./components/Head";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PrivateRouter from "./utils/PrivateRouter";
import './App.css'

// const TgWeb = window.Telegram.WebApp;
function App() {
  // const CloseApp = () => {
  //   TgWeb.close();
  // };

  return (
    <>
      <div className="background">
        <div className="img"></div>
      </div>

      <div className="wrapper">
        <Header />
        <Routes>
          <Route element={<PrivateRouter />}>
            {" "}
            <Route element={<Home />} path="/home" />{" "}
          </Route>
          <Route element={<Login />} path="login" />
        </Routes>
      </div>
    </>
  );
}

export default App;
