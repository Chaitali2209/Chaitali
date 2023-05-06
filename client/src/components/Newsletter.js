import doctor from "../assets/img/Doctor.jpg"
import { Col, Row} from "react-bootstrap";

export const Newsletter = ({ status }) => {
  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Sakhi's Expert Doctor</h3>
              <br></br>
              <h6>PCOS Management is more than just a number on a scale. Sakhi works with leading experts in the industry who care as much about your 
              path to PCOS reversal as you do.</h6>
              <br/><br/>
              <h6>PCOS Management is more than just a number on a scale. Sakhi works with leading experts in the industry who care as much about your 
              path to PCOS reversal as you do.</h6>
            </Col>
            <Col md={6} xl={7}>
                <div className="new-doc-bx">
                  <img src={doctor} alt="Sakhi Doctor Img"/>
                  <img src={doctor} alt="Sakhi Doctor Img"/>
                  <img src={doctor} alt="Sakhi Doctor Img"/>
                  <img src={doctor} alt="Sakhi Doctor Img"/>
                  <img src={doctor} alt="Sakhi Doctor Img"/>
                </div>
            </Col>
          </Row>  
        </div>
      </Col>
  )
}