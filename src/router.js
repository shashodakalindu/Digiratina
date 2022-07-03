import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./loading";

const Home = lazy(() => import("./v01/pages/home"));

function MainRouter() {
  return (
    <Suspense fallback={<div><Loading /></div>}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route element={<div>Page not found!</div>} />
      </Routes>
    </Suspense>
  );
}

export default MainRouter;
