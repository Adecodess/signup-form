import { useState, useEffect } from "react";

const useForm = (validate) => {
  const [person, setPerson] = useState({
    username: "admin",
    email: "admin@email.com",
    password: "admin",
  });

  const userData = {
    username: person.username,
    password: person.password,
  };

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
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

  return {
    handleChange,
    person,
    handleSubmit,
    userData,
    errors,
    validate,
  };
};

export default useForm;
