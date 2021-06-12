import React, { useState } from "react";
import "../patient/Patient.css";
import Alert from "../Alert/Alert";

const Patient = () => {
  const [people, setPeople] = useState({
    PatientName: "",
    PatientAge: "",
    PatientProblem: "",
    PatientPrescription: "",
  });
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });
  const handleChangee = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPeople({ ...people, [name]: value });
  };

  const handleSubmitt = (e) => {
    e.preventDefault();
    console.log(123);
    if (
      !people.PatientName &&
      !people.PatientAge &&
      !people.Sex &&
      !people.DOB &&
      !people.MaritalStatus &&
      !people.RegistrationDate &&
      !people.Address &&
      !people.PatientProblem
    ) {
      // display alert
      showAlert(true, "danger", "please enter a value");
    } else {
      // show Alert
      showAlert(
        false,
        "success",
        "your information was submitted successfully"
      );
      // set state back to empty string
      setPeople({
        PatientName: "",
        PatientAge: "",
        PatientProblem: "",
        Sex: "",
        DOB: "",
        MaritalStatus: "",
        RegistrationDate: "",
        Address: "",
      });
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  return (
    <section>
      <article className="patient-form">
        <p className="titleText"> new patient registration</p>
        <form className="form" onSubmit={handleSubmitt}>
          {alert.show && <Alert {...alert} removeAlert={showAlert} />}
          <div className="form-control">
            <label htmlFor="Name">Name: </label>
            <input
              type="text"
              placeholder="patient name"
              id="PatientName"
              name="PatientName"
              required
              value={people.PatientName}
              onChange={handleChangee}
            />
          </div>
          <div className="form-control">
            <label htmlFor="Age">Age: </label>
            <input
              type="number"
              placeholder="patient Age"
              id="PatientAge"
              name="PatientAge"
              required
              value={people.PatientAge}
              onChange={handleChangee}
            />
          </div>
          <div className="form-control">
            <label htmlFor="Problem">Problem: </label>
            <input
              type="text"
              placeholder="patient problem"
              id="PatientProblem"
              name="PatientProblem"
              required
              value={people.PatientProblem}
              onChange={handleChangee}
            />
          </div>

          <div className="form-control">
            <label htmlFor="marital status">Marital Status: </label>
            <input
              type="text"
              placeholder="marital status"
              id="MaritalStatus"
              name="MaritalStatus"
              required
              value={people.MaritalStatus}
              onChange={handleChangee}
            />
          </div>
          <div className="form-control">
            <label htmlFor="D.O.B">D.O.B: </label>
            <input
              type="date"
              placeholder="date of birth"
              id="DOB"
              name="DOB"
              required
              value={people.DOB}
              onChange={handleChangee}
            />
          </div>
          <div className="form-control">
            <label htmlFor="sex">Sex: </label>
            <input
              type="text"
              placeholder="Sex"
              id="Sex"
              name="Sex"
              required
              value={people.Sex}
              onChange={handleChangee}
            />
          </div>
          <div className="form-control">
            <label htmlFor="Address">Address: </label>
            <input
              type="text"
              placeholder="Address"
              id="Address"
              name="Address"
              required
              value={people.Address}
              onChange={handleChangee}
            />
          </div>
          <div className="form-control">
            <label htmlFor="Registration Date">Registration Date: </label>
            <input
              type="date"
              placeholder="Registration Date"
              id="RegistrationDate"
              name="RegistrationDate"
              required
              value={people.RegistrationDate}
              onChange={handleChangee}
            />
          </div>
          <button className="pharma-btn" type="submit">
            Submit
          </button>
        </form>
      </article>
    </section>
  );
};

export default Patient;
