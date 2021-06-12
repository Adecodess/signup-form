import React, { useState } from "react";
import "../doctor/Doctor.css";
import doctor from "../../assets/doctor.jpg";
import Alert from "../Alert/Alert";
import { FaDiagnoses } from "react-icons/fa";
import { AiOutlineFieldNumber } from "react-icons/ai";

const Doctor = () => {
  const [people, setPeople] = useState({
    PatientName: "",
    PatientAge: "",
    PatientProblem: "",
    PatientDiagnosis: "",
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

    if (
      !people.PatientName &&
      !people.PatientAge &&
      !people.PatientDiagnosis &&
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
        PatientDiagnosis: "",
        PatientProblem: "",
      });
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  return (
    <section className="pharma-container">
      <div className="main__container">
        <div className="main__title">
          <img src={doctor} alt="hello" />
          <div className="main__greeting">
            <h1>Hello ES HEALTHCARE</h1>
            <p>Welcome to Doctor Dashboard </p>
          </div>
        </div>

        <div className="main__cards">
          <div className="card">
            <i className="  icon text-lightblue">
              <FaDiagnoses />
            </i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Diagnosis</p>
              <span className="font-bold text-title">578</span>
            </div>
          </div>

          <div className="card">
            <i className="icon text-red">
              <AiOutlineFieldNumber />
            </i>
            <div className="card_inner">
              <p className="text-primary-p">
                Number of Medical History Reviewed
              </p>
              <span className="font-bold text-title">2467</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-medkit fa-2x text-yellow"></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Treatments</p>
              <span className="font-bold text-title">340</span>
            </div>
          </div>

          {/* <div className="card">
            <i className="fa fa-thumbs-up fa-2x text-green"></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of likes</p>
              <span className="font-bold text-title">645</span>
            </div>
          </div> */}
        </div>
      </div>
      <article className="article">
        <p className="title">patient form</p>
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
              placeholder="patient name"
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
            <label htmlFor="Prescription">Diagnosis: </label>
            <input
              type="text"
              placeholder="diagnosis"
              id="PatientDiagnosis"
              name="PatientDiagnosis"
              required
              value={people.PatientDiagnosis}
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

export default Doctor;
