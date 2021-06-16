import React, { useState } from "react";
import "../patient/Patient.css";
import Alert from "../Alert/Alert";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";

const Patient = () => {
  const [people, setPeople] = useState({
    PatientName: "",
    PatientAge: "",
    PatientProblem: "",
    MaritalStatus: "",
    DOB: "",
    Sex: "",
    Address: "",
    RegistrationDate: "",
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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <>
      <div className="main__title">
        <div className="main__greeting">
          <h1>Hello ES HEALTHCARE</h1>
          <p>Welcome to Patient Dashboard</p>
        </div>
      </div>
      <div className="all-cardss">
        <div className="cardss">
          <div className="cardss1">
            <div className="cards-text">
              <h1>health history</h1>
            </div>
          </div>
        </div>
        <div className="cardss">
          <div className="cardss2">
            <div className="cardss-text">
              <h1>online appointments</h1>
            </div>
          </div>
        </div>
        <div className="cardss">
          <div className="cardss3">
            <div className="cardss-text">
              <h1>transportation</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="dash-container">
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />

        <section className="patient-content">
          <article className="leftt-contentt">
            <div className="patient-avatar">
              <img
                src="https://www.globalcincinnati.org/wp-content/uploads/2017/10/icon_membership_individual.png"
                alt="avatar"
              />
            </div>
            <div className="patient-name">
              <h1>welcome james</h1>
              <p>last appointment</p>
              <h2>12-10-2021</h2>
            </div>
            <button className="pat-btn" type="submit">
              Log Out
            </button>
          </article>
          <article className="patient-form">
            <form className="foorm" onSubmit={handleSubmitt}>
              <p className="titleeeText"> new patient registration</p>
              {alert.show && <Alert {...alert} removeAlert={showAlert} />}
              <div className="foorm-control">
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
              <div className="foorm-control">
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
              <div className="foorm-control">
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

              <div className="foorm-control">
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
              <div className="foorm-control">
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
              <div className="foorm-control">
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
              <div className="foorm-control">
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
              <div className="foorm-control">
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
              <button className="pa-btn" type="submit">
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
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      </div>
    </>
  );
};

export default Patient;
