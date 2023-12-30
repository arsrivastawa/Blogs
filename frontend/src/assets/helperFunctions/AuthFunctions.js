import axios from "axios";

export default function handleLogin(email, password, setMessage) {
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (pattern.test(email)) {
    setMessage("Enter a Valid email Address");
  } else if (email != "" && password != "") {
    axios
      .post("http://localhost:3000/login", { email, password })
      .then((res) => {
        if (res.data.state == "exist") {
          setMessage("Log in Success");
        } else if (res.data.state == "doesNotExist") {
          setMessage("Email doesn't exist in our record, plese register");
        } else {
          setMessage("Wrong Password");
        }
      })
      .catch((err) => {
        setMessage("Error While Sending the Data");
      })
      .finally(() => {
        setTimeout(() => {
          setMessage("");
        }, 2000);
      });
  } else {
    setMessage("Fill All Fields");
  }
}

export function handleSignup(
  uname,
  email,
  uid,
  password,
  cnfPassword,
  setMessage
) {
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!pattern.test(email)) {
    setMessage("Enter valid Email Address");
  } else if (
    uid != "" &&
    email != "" &&
    password != "" &&
    cnfPassword != "" &&
    uname != ""
  ) {
    if (password == cnfPassword) {
      axios
        .post("http://localhost:3000/signup", {
          uname,
          email,
          uid,
          cnfPassword,
        })
        .then((res) => {
          if (res.data.state == "done") {
            setMessage("Signup Success");
          } else {
            setMessage("Email already exists, please login");
          }
        })
        .catch((err) => {
          setMessage("Error While Send the Data");
        })
        .finally(() => {
          setTimeout(() => {
            setMessage("");
          }, 2000);
        });
    } else {
      setMessage("Password in both the fields should be same");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }
  } else {
    setMessage("Enter All Fields");
  }
}
