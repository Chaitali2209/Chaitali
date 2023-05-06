import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
// import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export const DetectPCOS = () => {
  const formInitialDetails = {
    Age:"",
    Weight:"",
    Height:"",
    BMI:"",
    Blood_Group:"",
    Pulse_rate:"",
    RR:"",
    Hb:"",
    Cycle:"",
    Cycle_length:"",
    Marriage_Status:"",
    Pregnant:"",
    No_of_abortions:"",
    Hip:"",
    Waist:"",
    Waist_Hip_Ratio:"",
    Weight_gain:"",
    hair_growth:"",
    Skin_darkening:"",
    Hair_loss:"",
    Pimples:"",
    Fast_food:"",
    Reg_Exercise:"",
    BP_Systolic:"",
    BP_Diastolic:"",
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Sumbit');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Submitting...");
    let response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.text();
    setFormDetails(formInitialDetails);
    console.log("Res",result);
    alert(result);
    if (response.status == 200) {
      setStatus({ succes: true, message: result});

    } else {
      console.log(response.status);
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact" id="connect">
      <NavBar />
      <Container>
        <div className="contact-main">
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Detect if you are Suffering from PCOS</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="number" min="0" value={formDetails.Age} placeholder="Age" onChange={(e) => {console.log(formInitialDetails);onFormUpdate('Age', e.target.value)}} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="number" min="0" value={formDetails.Weight} placeholder="Weight" onChange={(e) => onFormUpdate('Weight', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="number" min="0" value={formDetails.Height} placeholder="Height" onChange={(e) => onFormUpdate('Height', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="number" min="0" value={formDetails.BMI} placeholder="BMI" onChange={(e) => onFormUpdate('BMI', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="number" min="0" value={formDetails.Blood_Group} placeholder="Blood_Group (O-10, A-11, B-12, AB-13) " onChange={(e) => onFormUpdate('Blood_Group', e.target.value)}></input>
                      
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="number" min="0" value={formDetails.Pulse_rate} placeholder="Pulse_rate" onChange={(e) => onFormUpdate('Pulse_rate', e.target.value)}></input>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="number" min="0" value={formDetails.RR} placeholder="RR" onChange={(e) => onFormUpdate('RR', e.target.value)}></input>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" rows="6" value={formDetails.Hb} placeholder="Hb" onChange={(e) => onFormUpdate('Hb', e.target.value)}></input>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="number" min="0" rows="6" value={formDetails.Cycle} placeholder="Cycle" onChange={(e) => onFormUpdate('Cycle', e.target.value)}></input>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="number" min="0" rows="6" value={formDetails.Cycle_length} placeholder="Cycle_length" onChange={(e) => onFormUpdate('Cycle_length', e.target.value)}></input>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="number" min="0" rows="6" value={formDetails.Marriage_Status} placeholder="Marriage_Status" onChange={(e) => onFormUpdate('Marriage_Status', e.target.value)}></input>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="number" min="0" rows="6" value={formDetails.Pregnant} placeholder="Pregnant (Yes-1/No-0)" onChange={(e) => onFormUpdate('Pregnant', e.target.value)}></input>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="number" min="0" rows="6" value={formDetails.No_of_abortions} placeholder="No_of_abortions" onChange={(e) => onFormUpdate('No_of_abortions', e.target.value)}></input>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="number" min="0" rows="6" value={formDetails.Hip} placeholder="Hip" onChange={(e) => onFormUpdate('Hip', e.target.value)}></input>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="number" min="0" rows="6" value={formDetails.Waist} placeholder="Waist" onChange={(e) => onFormUpdate('Waist', e.target.value)}></input>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" rows="6" value={formDetails.Waist_Hip_Ratio} placeholder="Waist_Hip_Ratio" onChange={(e) => onFormUpdate('Waist_Hip_Ratio', e.target.value)}></input>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="number" min="0" rows="6" value={formDetails.Weight_gain} placeholder="Weight gain (Yes-1/No-0)" onChange={(e) => onFormUpdate('Weight_gain', e.target.value)}></input>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="number" min="0" rows="6" value={formDetails.hair_growth} placeholder="Hair Growth (Yes-1/No-0)" onChange={(e) => onFormUpdate('hair_growth', e.target.value)}></input>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="number" min="0" rows="6" value={formDetails.Skin_darkening} placeholder="Skin Darkening (Yes-1/No-0)" onChange={(e) => onFormUpdate('Skin_darkening', e.target.value)}></input>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="number" min="0" rows="6" value={formDetails.Hair_loss} placeholder="Hair Loss (Yes-1/No-0)" onChange={(e) => onFormUpdate('Hair_loss', e.target.value)}></input>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="number" min="0" rows="6" value={formDetails.Pimples} placeholder="Pimples (Yes-1/No-0)" onChange={(e) => onFormUpdate('Pimples', e.target.value)}></input>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="number" min="0" rows="6" value={formDetails.Fast_food} placeholder="FastFood (Yes-1/No-0)" onChange={(e) => onFormUpdate('Fast_food', e.target.value)}></input>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="number" min="0" rows="6" value={formDetails.Reg_Exercise} placeholder="Do you do Regular Exercise? (Yes-1/No-0)" onChange={(e) => onFormUpdate('Reg_Exercise', e.target.value)}></input>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="number" min="0" rows="6" value={formDetails.BP_Systolic} placeholder="BP Systolic" onChange={(e) => onFormUpdate('BP_Systolic', e.target.value)}></input>
                    </Col>
                    <Col size={12} className="px-1">
                      <input type="number" min="0" rows="6" value={formDetails.BP_Diastolic} placeholder="BP Diastolic" onChange={(e) => onFormUpdate('BP_Diastolic', e.target.value)}></input>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
        </div>
      </Container>
      <Footer />
    </section>
  )
}
