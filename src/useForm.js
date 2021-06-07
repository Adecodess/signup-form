import { useState, useEffect } from "react";

const useForm = (validate) => {
  const [person, setPerson] = useState({
    username: "",
    email: "",
    password: "",
  });

  // const navigation =()=>{
  const userData = {
    username: person.username,
    email: person.email,
    password: person.password,
  };

  //    if ((userData[0].username, userData[0].password, userData[0].email)) {

  //    }
  // }

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    // const name = e.target.name;
    // console.log(name);
    // console.log(name, value);
    setPerson({
      ...person,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(person));

    setPerson({
      username: "",
      email: "",
      password: "",
    });
  };

  return { handleChange, person, handleSubmit, userData, errors, validate };
};

export default useForm;
