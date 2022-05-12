import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handleUserChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://my-marvel-backend-app.herokuapp.com/signup",
        {
          email: email,
          username: username,
          password: password,
        }
      );

      handleToken(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="signup-container">
        <h1>S'inscrire</h1>

        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="text"
          placeholder="pseudo"
          value={username}
          onChange={handleUserChange}
        />
        <input
          type="password"
          placeholder="mot de passe"
          value={password}
          onChange={handlePasswordChange}
        />

        <input className="sign" type="submit" value="S'inscrire" />
      </form>
    </div>
  );
};

export default SignUp;
