import axios from "axios";

export default async function handleLogin(email, password, setMessage) {
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email != "" && password != "") {
    console.log("first");
    axios
      .post("http://localhost:3000/login", { email, password })
      .then((res) => {
        res.data.success
          ? setMessage("Login Success!")
          : res.data.success == "doesNotExist"
          ? setMessage("Email does not exist in our record, please register")
          : setMessage("Invalid Email Id or Password");
      })
      .catch((err) => {
        setMessage("Error While Sending the Data");
      })
      .finally(() => {
        setTimeout(() => {
          setMessage("");
        }, 2000);
      });
  } else if (!pattern.test(email)) {
    setMessage("Enter a Valid email Address");
  } else {
    setMessage("Fill All Fields");
  }
}

export function handleSignup(uname, email, password, cnfPassword, setMessage) {
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!pattern.test(email)) {
    setMessage("Enter valid Email Address");
  } else if (
    email != "" &&
    password != "" &&
    cnfPassword != "" &&
    uname != ""
  ) {
    if (password == cnfPassword) {
      axios
        .post("http://localhost:3000/signup", { uname, email, cnfPassword })
        .then((res) => {
          res.data.success == "done"
            ? setMessage("Signup Success!")
            : res.data.success == "exists"
            ? setMessage(
                "Email already exists, Please logIn with your credentials"
              )
            : setMessage("Please Fill All Details");
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
  } else if (!pattern.test(email)) {
    setMessage("Enter a Valid email Address");
  } else {
    setMessage("Enter All Fields");
  }
}
