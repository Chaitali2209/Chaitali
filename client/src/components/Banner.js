import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
// import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "How to Identify?", "How to deal with it?", "What can be done?" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
  return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    
    let fullText = toRotate[i];

    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } 
    
    else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } 
    
    else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to Sakhi-PCOS Detection System</span>
                <h1>{`What is PCOS?`} <span className="txt-rotate" dataperiod="1000" data-rotate='[ "How to Identify?", "How to deal with it?", "What can be done?" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Polycystic ovary syndrome or PCOS is a chronic medical condition that can affect your reproductive, metabolic and psychological health. However, PCOS symptoms often go overlooked and undiagnosed due to lack of awareness, proper treatment protocol and delayed diagnosis. Although it can feel overwhelming to be diagnosed with a chronic condition such as PCOS, it is important to remember that you can manage all your symptoms with the right care.</p>
                  <p>Many symptoms of PCOS can seem non-specific such as weight gain, irregular periods or acne. So, often diagnosis can be delayed till years unless the symptoms get severe or obvious. Not every woman will have each symptom but certain hallmark features of having PCOS include irregular periods, weight gain, acne, excess facial/body hair, scalp hair loss, dark skin patches, mood disorders.</p>
                  <button onClick={() => console.log('connect')} to="#contact">Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
            
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}