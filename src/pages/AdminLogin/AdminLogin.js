import React, { Component } from "react";
import logo from "../../assets/Group.svg";
import "./AdminLogin.scss";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

const AdminLogin = () => {
  let history = useHistory();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log("Logging in", values);
          axios.post(``, values).then((res) => {
            console.log(res);
            //   console.log(res.data);
            //   let user = {username: res.data.user.username, id: res.data.user._id}
            //   localStorage.setItem("token", res.data.token)
            //   localStorage.setItem('user', JSON.stringify(user))
            //     history.push('/chat',{user: res.data.user})
          });
          setSubmitting(false);
        }, 500);
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().required("Required").email(),
        password: Yup.string()
          .required("No password provided.")
          .min(8, "Password is too short - should be 8 chars minimum.")
          .matches(/(?=.*[0-9])/, "Password must contain a number."),
      })}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <div className="account-page">
            <div className="main-wrapper">
              <div className="account-content">
                <div className="container">
                  <div className="account-logo">
                    <a href="index.html">
                      <img src={logo} alt="Nassims" />
                    </a>
                  </div>

                  <div className="account-box">
                    <div className="account-wrapper">
                      <h3 className="account-title">Login</h3>

                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label className="email">Email </label>
                          <input
                            name="email"
                            type="text"
                            placeholder="emekaokafor@gmail.com"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.email && touched.email && "error"}
                            className="form-control"
                            type="text"
                          />
                          {errors.email && touched.email && (
                            <div className="input-feedback">{errors.email}</div>
                          )}
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <div className="col">
                              <label className="password">Password</label>
                            </div>
                            <div className="col-auto">
                              <a className="forgotPassword" href="#">
                                Forgot password?
                              </a>
                            </div>
                          </div>
                          <input
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.password && touched.password && "error"
                            }
                            className="form-control"
                            type="password"
                          />
                          {errors.password && touched.password && (
                            <div className="input-feedback">
                              {errors.password}
                            </div>
                          )}
                        </div>
                        <div className="form-group text-center">
                          <button
                            className="btn account-btn"
                            disabled={isSubmitting}
                            type="submit"
                          >
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default AdminLogin;
