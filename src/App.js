import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
} from "react-router-dom";

const AuthPage = () => {
  return <div>this is auth page</div>;
};

const AdminPage = () => {
  return (
    <div>
      <Link to="/admin/page-one"> page one </Link>
      <Link to="/admin/page-two"> page two </Link>
      <Outlet />
    </div>
  );
};

const PageOne = () => {
  return <div>page one</div>;
};
const PageTwo = () => {
  return <div>page two</div>;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="admin" element={<AdminPage />}>
          <Route index element={<Navigate to="/admin/page-one" />} />
          <Route path="page-one" element={<PageOne />} />
          <Route path="page-two" element={<PageTwo />} />
        </Route>
        <Route path="auth" element={<AuthPage />} />
        <Route path="*" element={<Navigate to="/admin" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
