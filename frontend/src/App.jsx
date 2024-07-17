import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Signupin from "./routes/Signupin";
import Login from "./components/Login";
import Apppage from "./routes/Apppage";
import Home from "./routes/Home";
import Bag from "./routes/Bag";
import { useFirebase } from "./context/Firebase";
import Iteminfo from "./components/Iteminfo";

const App = () => {
  const { isLoggedIn } = useFirebase();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Apppage />}
          children={[
            <Route key={1} path="/" element={<Home />} />,
            <Route key={2} path="/bag" element={<Bag />} />,
            <Route key={3} path="/item/:id" element={<Iteminfo />} />,
          ]}
        />
        <Route
          path="/register"
          element={isLoggedIn ? <Navigate to={"/"} /> : <Signupin />}
          children={[<Route key={1} path="/register" element={<Register />} />]}
        />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to={"/"} /> : <Signupin />}
          children={[<Route key={1} path="/login" element={<Login />} />]}
        />
      </Routes>
    </>
  );
};

export default App;
