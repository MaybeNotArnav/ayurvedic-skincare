import { useState } from "react";

const LoginSignupPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form>
        {!isLogin && <input type="text" placeholder="Name" required />}
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      </form>
      <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
      </p>
    </div>
  );
};

export default LoginSignupPage;
