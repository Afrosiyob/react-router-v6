import { Outlet, Router } from "react-location";
import { location, routes } from "./routes/Routes";

function App() {
  return (
    <Router location={location} routes={routes}>
      <Outlet />
    </Router>
  );
}

export default App;
