import "../doctor/Doctor.css";
import React, { useState } from "react";
import "../patient/Patient.css";
import Alert from "../Alert/Alert";
import ambulance from "../../assets/ambulance.jpg";
import Chart from "../charts/Chart";

const Driver = () => {
  const [people, setPeople] = useState({
    PatientName: "",
    PatientAge: "",
    Sex: "",
    Address: "",
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
      !people.Address
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
        Sex: "",
        Address: "",
      });
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  return (
    <section>
      <div className="main__title">
        <img src={ambulance} alt="pharmacist" />
        <div className="main__greeting">
          <h1>Hello ES HEALTHCARE</h1>
          <p>Welcome to Ambulance Dashboard</p>
        </div>
      </div>
      <article className="driver-form">
        <p className="titleText"> order an ambulance</p>
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

          <button className="pharma-btn" type="submit">
            Submit
          </button>
        </form>
      </article>
    </section>
  );
};

export default Driver;
