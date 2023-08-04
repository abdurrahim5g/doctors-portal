import { useEffect, useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const url = `http://localhost:5000/jwt?email=${email}`;
    if (email) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (data.accessToken) {
            const token = data.accessToken;
            setToken(token);
            localStorage.setItem("accessToken", token);
          }
        });
      console.log(email);
    }
  }, [email]);
  return [token];
};

export default useToken;
