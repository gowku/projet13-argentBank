import axios from "axios";

export function logUser({ ...userInput }) {
  //   console.log(email, password);
  return axios.post("http://localhost:3001/api/v1/user/login", {
    email: userInput.enteredEmail,
    password: userInput.enteredPassword,
  });
}
