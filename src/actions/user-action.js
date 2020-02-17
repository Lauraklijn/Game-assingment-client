import axios from "axios";

export function login(email, password) {
  return async function(dispatch, getState) {
    console.log(email, password);
    const response = await axios.post("http://localhost:4000/loging", {
      email,
      password
    });
    console.log(response);
    dispatch({ type: "TESTING" });
  };
}
