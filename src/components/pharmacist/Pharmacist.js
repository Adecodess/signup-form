import React, { useState } from "react";
import "../pharmacist/Pharmacist.css";
import pharmacist from "../../assets/pharmacist.jpg";
import Alert from "../Alert/Alert";
import { FaPrescription } from "react-icons/fa";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";

const Pharmacist = () => {
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
      !people.PatientPrescription &&
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
        PatientPrescription: "",
        PatientProblem: "",
      });
    }
  };
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  return (
    <>
      <div className="dash-container">
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
        <section className="pharma-container">
          <div className="main__container">
            <div className="main__title">
              <img src={pharmacist} alt="pharmacist" />
              <div className="main__greeting">
                <h1>Hello ES HEALTHCARE</h1>
                <p>Welcome to Pharmacist Dashboard</p>
              </div>
            </div>

            <div className="main__cards">
              <div className="card">
                <i className="icon text-lightblue">
                  <FaPrescription />
                </i>
                <div className="card_inner">
                  <p className="text-primary-p">Number of Prescription</p>
                  <span className="font-bold text-title">578</span>
                </div>
              </div>

              <div className="card">
                <i className="fa fa-calendar fa-2x text-red"></i>
                <div className="card_inner">
                  <p className="text-primary-p">
                    {" "}
                    Number of Times of Prescription
                  </p>
                  <span className="font-bold text-title">2467</span>
                </div>
              </div>

              <div className="card">
                <i className="fa fa-user-md fa-2x text-yellow"></i>
                <div className="card_inner">
                  <p className="text-primary-p">
                    Number of patient taking Prescription
                  </p>
                  <span className="font-bold text-title">340</span>
                </div>
              </div>

              <div className="card">
                <i className="fa fa-medkit fa-2x text-green"></i>
                <div className="card_inner">
                  <p className="text-primary-p">Number of medications</p>
                  <span className="font-bold text-title">645</span>
                </div>
              </div>
            </div>
          </div>
          <div className="all-cards">
            <div className="cards">
              <div className="cards1">
                <div className="cards-text">
                  <h1>new arrival</h1>
                </div>
              </div>
            </div>
            <div className="cards">
              <div className="cards2">
                <div className="cards-text">
                  <h1>daily statistics</h1>
                </div>
              </div>
            </div>
            <div className="cards">
              <div className="cards3">
                <div className="cards-text">
                  <h1>doctor's prescription</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="pharma-content">
            <article className="article">
              <form className="form" onSubmit={handleSubmitt}>
                <p className="pharma-title">patient form</p>
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
                    placeholder="patient age"
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
                  <label htmlFor="Prescription">Prescription: </label>
                  <input
                    type="text"
                    placeholder="prescription from the doctor"
                    id="PatientPrescription"
                    name="PatientPrescription"
                    required
                    value={people.PatientPrescription}
                    onChange={handleChangee}
                  />
                </div>
                <button className="pharma-btn" type="submit">
                  Submit
                </button>
              </form>
            </article>
            <div className="left-content">
              <div className="pharma-avatar">
                <img
                  src="https://www.globalcincinnati.org/wp-content/uploads/2017/10/icon_membership_individual.png"
                  alt="avatar"
                />
              </div>
              <div className="pharm-name">
                <h1 className="pharm-text">Welcome Pharm James</h1>
              </div>
              <button className="pharm-btn" type="submit">
                Log Out
              </button>
            </div>
          </div>
        </section>
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      </div>
    </>
  );
};

export default Pharmacist;
