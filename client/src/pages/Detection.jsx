import React, { useState } from "react";
import { useEffect } from "react";
import '../pages/Detection.css'
import { NavBar } from '../components/NavBar'
import {image} from '../assets/sonography.jpg'
import { Container, Row, Col } from "react-bootstrap";

const Detection = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    
      const [profilePicture, setProfilePicture] = useState();
      const [status, setStatus] = useState({});
      const [errors, setErrors] = useState({});
    
      const handleInputChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const validate = () => {
        const newErrors = {};
        if (!formData.name) {
          newErrors.name = "Name is required";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };

      const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          var reader = new FileReader();
    
          reader.onload = function (e) {
            console.log({
              data: e.target.result,
              name: event.target.files[0].name,
            });
            setProfilePicture({
              data: e.target.result,
              name: event.target.files[0].name,
            });
          };
    
          reader.readAsDataURL(event.target.files[0]);
        }
      };
    
      useEffect(() => {
        console.log(profilePicture);
      }, [profilePicture]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValidated = validate();
        if (true) {
          // console.log(formData);

          //sending formdata as a request to backend server
          const data = new FormData();
          data.append("profilePicture", e.target.ProfilePicture.files[0]);
    
          const response = await fetch("http://127.0.0.1:5000/detection", {
            method: "POST",
            // credentials: "include",
            body: data,
          });
    
          if (response.status === 200) {
            // alert("Registered");
            const user = await response.text();
            alert(user);  
            sessionStorage.setItem("user", JSON.stringify(user));
            window.location.href = "/";
          } else {
            const error = await response.json();
            alert(error.error);
          }
        }
      };

    return (
        <div className="container1">
            <NavBar />
            <div className="registrationContainer">
                <form className="RegisterForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <h1 className="form-heading">Detection Page</h1>

                        <div className="profileImg">
                            <label className="lblUpload" for="inputImg">
                                <img
                                    src={profilePicture ? profilePicture.data : require('../assets/sonography.jpg')}
                                    className="imgProfile"
                                ></img>
                                <span id="selectedImage">
                                    {profilePicture
                                        ? profilePicture.name
                                        : "Please add your sonography reports for further anaylsis"}
                                </span>
                            </label>
                            <input onChange={handleImageChange} name="ProfilePicture" id="histoImage" className="histoImage" type={"file"}></input>
                        </div>

                        <button className="registerButton" type="submit">
            Scan Your Reports
          </button>
                    </div>
                </form>
            </div>
            {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
        </div>

    )
}

export default Detection