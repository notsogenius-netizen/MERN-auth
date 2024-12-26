import { Route, Routes } from "react-router";
import { Button } from "./components/ui/button";
import Login from "./pages/login";
import Register from "./pages/register";
import VerifyEmail from "./pages/verify-email";
import ForgotPassword from "./pages/forgot-password";
import ResetPassword from "./pages/reset-password";

const Home = () => (
  <div>
    <Button>Click me</Button>
  </div>
);

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/email/verify/:code" element={<VerifyEmail />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
