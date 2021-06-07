export default function validateInfo(person, login) {
  let errors = {};

  if (!person.username.trim()) {
    errors.username = "username required";
  }

  // email
  if (!person.email) {
    errors.email = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(person.email)) {
    errors.email = "Email address is invalid";
  }

  // password
  if (!person.password) {
    errors.password = "Password is Required";
  } else if (person.password.length < 6) {
    errors.password = "Password needs to be 6 or more ";
  }

  return errors;
}
