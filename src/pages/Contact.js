import React from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import Meta from "../components/Meta";
import { AiOutlineHome } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineInformationCircle } from "react-icons/hi";
import Container from "../components/Container";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux"
import { createQuery } from "../features/contact/contactSlice";

import logo from "../img/imagee1.jpg"
import { Link } from "react-router-dom";

let contactSchema = yup.object({
  name: yup.string().required("Name is Required"),
  email: yup.string().required("Email is Required"),
  mobile: yup.string().required("Mobile Required"),
  comment: yup.string().required("Comment Required"),

});

const Contact = () => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      comment: ""
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      dispatch(createQuery({ name: values.name, email: values.email, mobile: values.mobile, comment: values.comment }))
    },
  });
  return (
    <>
      <div className="breadcrumb-area blog-breadcrumb-bg  d-flex align-items-center justify-content-center">
        <div className="containers ">
          <div className="rows ">
            <div className="col-lg-12  ">
              <div className="breadcrumb-txt ">
                <h1 className="h1-cservice">Contact Dumping Data</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="breadcrumb-overlay"></div>
      </div>

      <div className="contact-section ">
        <div className="containers ">

          <div className="d-flex aligin-items-center justify-content-center">
            <div className="contact-infos border " style={{ height: "50vh", width: "140vh", }}>
              <div className="rows no-gutters">
                <div className="col-lg-4 single-info-col">
                  <div className="single-info wow fadeInRight" data-wow-duration="1s">
                    <div className="icon-wrapper"><i className="fas fa-home"></i></div>
                    <div className="info-txt">
                      <p>163, Dr.M. G. Mahimtura Marg, 3rd Kumbharwada,
                      </p>
                      <p>Mumbai-400 004 (India)</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 single-info-col">
                  <div className="single-info wow fadeInRight" data-wow-duration="1s" data-wow-delay=".2s">
                    <div className="icon-wrapper"><i className="fas fa-phone"></i></div>
                    <div className="info-txt">
                      <p>+91-22-6659 5285 </p>
                      <p>+91-22-6639 4214</p>

                    </div>
                  </div>
                </div>
                <div className="col-lg-4 single-info-col">
                  <div className="single-info wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s">
                    <div className="icon-wrapper"><i className="far fa-envelope"></i></div>
                    <div className="info-txt">
                      <p>
                        <a className="a-service " href="mailto:inquiry@nickelalloysonline.co.in">inquiry@nickelalloysonline.co.in</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rows no-gutters">
                <div className="col-lg-4 single-info-col">
                  <div className="single-info wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s">
                    <div className="icon-wrapper"><i className="far fa-user"></i></div>
                    <div className="info-txt">
                      <p> <strong>Contact:</strong> Mr. Milap Mehta</p>
                      <p> <strong>Mob: </strong>+91-9869 532 584</p>
                      <p><a className="a-service" href="mailto:inquiry@raajsagarsteels.com">inquiry@raajsagarsteels.com</a> </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 single-info-col">
                  <div className="single-info wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s">
                    <div className="icon-wrapper"><i className="far fa-user"></i></div>
                    <div className="info-txt">
                      <p> <strong>Contact:</strong> Mr. Ashish Jain</p>

                      <p><Link href="mailto:info@raajsagarsteels.com">info@raajsagarsteels.com</Link> </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 single-info-col">
                  <div className="single-info wow fadeInRight" >
                    <div className="icon-wrapper"><i className="far fa-user"></i></div>
                    <div className="info-txt">
                      <p> <strong>Contact:</strong> Mr. Ayush Jain</p>
                      <p> <strong>Mob: </strong>+91-9820889426</p>
                      <p><a className="a-service" href="mailto:ayush@raajsagarsteels.com">ayush@raajsagarsteels.com</a> </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-center ">
            <div className="contact-form-section ">
              <div className="rows d-flex align-items-center justify-content-center ">
                <div className="col-lg-6  ">
                  <h2 className="subtitle mt-3 d-flex  align-items-center justify-content-center animate">Keep In Touch</h2>
                  <div className="containers d-flex align-items-center justify-content-center">
                    <div className="rows ">
                      <div className="right-side ">
                        <form  >

                          <div className="form-group ">
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                          </div>

                          <div className="form-group">
                            <label for="name">Email:</label>
                            <input type="email" id="email" name="email" required />
                          </div>

                          <div className="form-group">
                            <label for="name">Phone:</label>
                            <input type="tel" id="tel" name="tel" required />
                          </div>

                          <div className="form-group">
                            <label for="data-type">Data Type:</label>
                            <select id="data-type" name="data-type" required>
                              <option value="">Select Data Type</option>
                              <option value="Export">Export Data</option>
                              <option value="Import">Import Data</option>
                              <option value="Export and Import">Both</option>
                              <option value="Other data">Other</option>
                            </select>
                          </div>

                          <div className="form-group">
                            <label for="message">Message:</label>
                            <textarea id="message" name="message" required></textarea>
                          </div>
                          <button type="submit" className="submit-button">Submit</button>
                        </form>
                      </div>
                    </div>
                  </div>

                </div>
                

                <div className="col-lg-6 " >
                  <h2 className="subtitle animate ">Our Location</h2>
                  <div className="map-wrapper">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2215.6659885491777!2d87.96522213019703!3d23.002088653386977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f84263696971df%3A0x605606b58115f625!2sSONARGORIA%20VIVEKANANDA%20SHISHU%20VIDYAMANDIR!5e0!3m2!1sen!2sin!4v1673887157942!5m2!1sen!2sin"
                      width="600"
                      height="450"
                      title="none"
                      className="border-0 w-100"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="container-xxl mt-3 bg-secondary " style={{height: "75vh"}}>
            <div className="row ">
              <div className="col-6 bg-primary m-2  felx-wrap  ">
              <div>
                <h4>Keep In Tuch</h4>
              </div>
                <form  >
                  <div className="">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                  </div>

                  <div className="">
                    <label for="name">Email:</label>
                    <input type="email" id="email" name="email" required />
                  </div>

                  <div className="">
                    <label for="name">Phone:</label>
                    <input type="tel" id="tel" name="tel" required />
                  </div>

                  <div className="">
                    <label for="data-type">Data Type:</label>
                    <select id="data-type" name="data-type" required>
                      <option value="">Select Data Type</option>
                      <option value="Export">Export Data</option>
                      <option value="Import">Import Data</option>
                      <option value="Export and Import">Both</option>
                      <option value="Other data">Other</option>
                    </select>
                  </div>

                  <div className="">
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                  </div>
                  <button type="submit" className="submit-button">Submit</button>
                </form>

              </div>
              <div className="col-6 bg-warning m-2"></div>
            </div>
          </div> */}

        </div>
      </div>
    </>
  )
}

export default Contact