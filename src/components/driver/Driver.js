import "../driver/Driver.css";
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
    <section className="driver-container">
      <div className="main__title">
        <img src={ambulance} alt="pharmacist" />
        <div className="main__greeting">
          <h1>Hello ES HEALTHCARE</h1>
          <p>Welcome to Ambulance Dashboard</p>
        </div>
      </div>
      <div className="all-cardss">
        <div className="cardss">
          <div className="cardss1">
            <div className="cards-text">
              <h1>bookings</h1>
            </div>
          </div>
        </div>
        <div className="cardss">
          <div className="cardss2">
            <div className="cardss-text">
              <h1>online appointment</h1>
            </div>
          </div>
        </div>
        <div className="cardss">
          <div className="cardss3">
            <div className="cardss-text">
              <h1>statistics</h1>
            </div>
          </div>
        </div>
      </div>

      <section className="driver-content">
        <article className="leftt-contentt">
          <div className="driver-avatar">
            <img
              src="https://www.globalcincinnati.org/wp-content/uploads/2017/10/icon_membership_individual.png"
              alt="avatar"
            />
          </div>
          <div className="driver-name">
            <h1>welcome james</h1>
            <p>last appointment</p>
            <h2>12-10-2021</h2>
          </div>
          <button className="dri-btn" type="submit">
            Log Out
          </button>
        </article>
        <article className="driver-form">
          <form className="formmm" onSubmit={handleSubmitt}>
            <p className="titleTextt"> order an ambulance</p>
            {alert.show && <Alert {...alert} removeAlert={showAlert} />}
            <div className="form-controll">
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
            <div className="form-controll">
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

            <div className="form-controll">
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
            <div className="form-controll">
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

            <button className="driver-btn" type="submit">
              Submit
            </button>
          </form>
        </article>
        <div className="right-contennt">
          <div className="healthh-content">
            <div className="healthh-text">
              <h3>health tips</h3>
              <p>
                the weather is hot to avoid heatstroke drin enough
                water,exercise requalrly, take good fruits
              </p>
            </div>
            <div className="hbtn">
              <button className="healthh-btn">log out</button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Driver;
