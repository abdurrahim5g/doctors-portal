import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Router/router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-center" />
    </>
  );
}

export default App;
