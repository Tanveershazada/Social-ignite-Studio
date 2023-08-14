import React, { useState } from "react";
import "./style.css";
import Heading from "../../components/Heading";
import Messageimg from "../../assets/message.jpg";
import Button from "../../components/Button";
import { HeadphoneIcon } from "../../components/Icons";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";

const MessageSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [Subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (name === "") {
      setErrMsg("name is required!");
    } else if (company === "") {
      setErrMsg("Please give your Company!");
    } else if (phone === "") {
      setErrMsg("phone is required!");
    }else if (email === "") {
      setErrMsg("Please give your Email!");
    }  else if (!emailValidation(email)) {
      setErrMsg("give a valid Email!");
    } else if (Subject === "") {
      setErrMsg("Please give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(`Thank you dear ${name}, Your message has been sent Successfully!`);
      setErrMsg("");
      setName("");
      setPhone("");
      setEmail("");
      setCompany("");
      setSubject("");
      setMessage("");
     
      
    }
  };

  return (
    <div className="Message__section">
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <Heading
                className="Message__heading"
                type="medium"
                labelType="blue"
                label="CONTACT US"
                title="Leave us a message. "
                desc="Share your thoughts with us. Leave a message and let's connect to discuss your goals and digital success."
              />

              <div className="row">
                <div className="col-12 col-md-6">
                  {/* {errMsg && (
                  <p className=" bg-gradient-to-r from-[#1e2024] to-[#23272b]
                    text-center text-blue-500 text-base tracking-wide animate animate-bounce">{errMsg}</p>
                 )}
                 {
                  successMsg && <p>{successMsg}</p>
                 } */}
                  <Input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className={errMsg === "User name is required!" && "outline-blue-color"}
                    placeholder="Name"
                    label="Name"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <Input
                    onChange={(e) => setCompany(e.target.value)}
                    value={company}
                    placeholder="Company"
                    label="Company"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <Input
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    placeholder="Phone"
                    label="Phone"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Email"
                    label="Email"
                  />
                </div>
                <div className="col-12">
                  <Input
                   onChange={(e) => setSubject(e.target.value)}
                   value={Subject}
                  placeholder="subject" label="Subject" />
                </div>
                <div className="col-12">
                  <Textarea
                   onChange={(e) => setMessage(e.target.value)}
                   value={message}
                  placeholder="Message" label="Message" />
                </div>
                <div className="col-12">
                {errMsg && (
                <p className="pt-3 bg-gradient-to-r err__msg">{errMsg}</p>
                  )}
                   {successMsg && (
                    <p>{successMsg}</p>
                 )}
                  <Button
                    onClick={handleSend}
                    className="btn__primary mt-3 w-100 "
                  >
                    SEND MESSAGE
                  </Button>
                </div>
               
              </div>
            </div>
            <div className="col-12 col-md-6 ">
              <div className="message__img">
                <img src={Messageimg} alt="Delever" className="img-fluid" />
                <div className="message__touch">
                  <div className="message__icon">
                    <HeadphoneIcon />
                  </div>
                  <div className="message__touch-title">
                    <h3>CUSTOMER SERVICES</h3>
                    <span>(888) 4000-234</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageSection;
