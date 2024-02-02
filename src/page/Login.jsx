import React, { useEffect, useState } from "react";
import Button from "../components/common/Button";
import Title from "../components/common/Title";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [inputField, setInputField] = useState({
    name: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    localStorage?.getItem("isLogin") && navigate("/");
  }, []);
  const [error, setError] = useState({
    name: "",
    password: "",
  });

  const [isValidate, setIsValidate] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setInputField((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const validation = (value) => {
    let err = {};
    if (!value?.name) {
      err = { ...err, name: "name need" };
    } else if (value.name.length < 4) {
      err = { ...err, name: "min length is 4" };
    }
    if (!value?.password) {
      err = { ...err, password: "password need" };
    } else if (
      !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(
        value?.password
      )
    ) {
      err = { ...err, password: "strong password needed" };
    }
    return err;
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setError(validation(inputField));
    setIsValidate(true);
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isValidate) {
      localStorage?.setItem("isLogin", true);
      localStorage?.setItem("userName", inputField?.name);
      window.location.pathname = "/";
    }
  }, [error, isValidate]);

  return (
    <div className="w-full bg-slate-200 min-h-screen flex justify-center items-center">
      <form
        onSubmit={handelSubmit}
        className="bg-white w-full m-2 !max-w-[400px] p-10 rounded-md shadow-lg"
      >
        <Title
          title={"Login"}
          className="!text-blue-500"
          bdClass={"!bg-blue-500"}
        />
        <div className="mt-4 space-y-2">
          <div className="productInput">
            <label htmlFor="">Username</label>
            <input
              onChange={handleChange}
              value={inputField?.name}
              type="text"
              name="name"
            />
            <p className="text-red-500">{error?.name}</p>
          </div>
          <div className="productInput">
            <label htmlFor="">Password</label>
            <input
              onChange={handleChange}
              value={inputField?.passward}
              type="text"
              name="password"
            />
            <p className="text-red-500">{error?.password}</p>
          </div>
        </div>
        <Button title={"Login"} className="w-full mt-8" />
      </form>
    </div>
  );
};

export default Login;
