import { useState, useEffect } from 'react'

const useForm = () => {
  const [person, setPerson] = useState({
    username: '',
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    // const name = e.target.name;
    // console.log(name);
    // console.log(name, value);
    setPerson({
      ...person,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(person.email, person.password, person.username)
    setPerson({
      username: '',
      email: '',
      password: '',
    })
  }

  return { handleChange, person, handleSubmit }
}

export default useForm
