import React from "react";
import styles from "./Contact.module.css";
import { useForm } from "react-hook-form";
import Spinner from "../../components/Spinner";
import ConnectStick from "../../components/ConnectStick/ConnectStick";
import emailjs from "emailjs-com";
const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    mode: "onChange",
  });

  async function onSubmit(data) {
    console.log("submitting the form", data);
    emailjs.send(
      "service_gonsvdk",
      "template_cs3ceof", 
      data,
      "GcdZcvWpDQnFvca5U" 
    ).then(
      (response) => {
        console.log("Message Sent Successfully", response.status, response.text);
        alert("Message Sent Successfully!");
        document.getElementsByClassName("form").reset();
      },
      (error) => {
        console.error("Message Sending Failed", error);
        alert("Message Sending Failed!");
      }
    );
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

 
  

  return (
    <>
      
      <div className={styles.container}>
        
        <div className={styles.contactInfo}>
          <div>
            <h2 className={styles.heading}>Get in Touch</h2>
          </div>
          <div>
            <p>
              I’m open to connecting, discussing potential collaborations, or
              just having a chat. <br />Feel free to fill out the form and email me.
            </p>
          </div>
         <div style={{float:"left",marginTop:"1rem"}}><ConnectStick /></div> 
        </div>

        <div className={styles.contactForm}>
          <div>
            <h2 className={styles.heading}>Send A Message</h2>
          </div>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.personalDetailWrap}>
            <div>
              <input
                placeholder="Your Full Name"
                style={
                  errors.name
                    ? { borderColor: "var(--colorful-error-color)" }
                    : {}
                }
                className={styles.inputField}
                type="text"
                {...register("name", {
                  required: true,
                  minLength: {
                    value: 3,
                    message: "⚠️ Name must contain at least 3 characters",
                  },
                  maxLength: {
                    value: 25,
                    message: "⚠️ Name must not exceed 20 characters",
                  },
                  pattern: {
                    value: /^(?=.*[a-zA-Z]{3})[a-zA-Z ]+$/,
                    message: "⚠️ Invalid name",
                  },
                })}
              />
              {errors.name && (
                <p className={styles.errorMessage}>{errors.name.message}</p>
              )}
            </div>

            <div>
              <input
                placeholder="Your Email"
                style={
                  errors.email
                    ? { borderColor: "var(--colorful-error-color)" }
                    : {}
                }
                className={styles.inputField}
                type="email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "⚠️ Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className={styles.errorMessage}>{errors.email.message}</p>
              )}
            </div>
            </div>

            <div>
              <input
                placeholder="Subject"
                className={styles.inputField}
                type="text"
                {...register("subject")}
              />
            </div>

            <div>
              <textarea
                placeholder="Message"
                style={
                  errors.message
                    ? { borderColor: "var(--colorful-error-color)" }
                    : {}
                }
                className={styles.inputField}
                {...register("message", {
                  required: true,
                  minLength: {
                    value: 3,
                    message: "⚠️ message must contain at least 3 characters",
                  },
                })}
              />
              {errors.message && (
                <p className={styles.errorMessage}>{errors.message.message}</p>
              )}
            </div>
            {isSubmitSuccessful && (
              <p style={{ color: "green", fontSize: "var(--fs-7)" }}>
                Thank you for your message.
              </p>
            )}

            <button
              className={styles.submitBtn}
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? (
                <Spinner size="1rem" />
              ) : (
                <ion-icon name="paper-plane" />
              )}
              <span>{isSubmitting ? "" : "Send Message"}</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
