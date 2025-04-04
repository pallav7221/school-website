//rrd imports
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider,
} from "react-router-dom";

// Components
// import Navbar from "./components/Navbar";
import Error from "./components/Error";

// Routes
import Home from "./routes/Home";
import About from "./routes/About";
import Facility from "./routes/Facility";
import Contact from "./routes/Contact";

//layout import
import RootLayout from "./layouts/RootLayout";
import ProgramLayout from "./layouts/ProgramLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="facility" element={<Facility />} />
      <Route path="programs" element={<ProgramLayout />}/>
        {/* <Route 
          index
          element={<UndergraduatePrograms />} 
          loader={programsLoader}
        /> */}
        {/* <Route 
          path=":id" 
          element={<ProgramDetails />}
          loader={programDetailsLoader}
        /> */}
      {/* </Route> */}
      <Route path="contact" element={<Contact />} />
      {/* <Route path="apply" element={<Admission />} /> */}
      <Route path="*" element={<Error />} />
    </Route>
  )
);

const App = () => {
  return ( 
    <RouterProvider router={router} />
  );
}
 
export default App;