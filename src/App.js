import { Route, Routes } from "react-router-dom";
import Header from "./components/Head";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PrivateRouter from "./utils/PrivateRouter";
const TgWeb = window.Telegram.WebApp;

function App() {
  const CloseApp = () => {
    TgWeb.close();
  };

  return (
    <>
      <Header />
      <Routes>
        <Route element={<PrivateRouter />}>
          {" "}
          <Route element={<Home />} path="/home" />{" "}
        </Route>
        <Route element={<Login />} path="login" />
      </Routes>
    </>
  );
}

export default App;
