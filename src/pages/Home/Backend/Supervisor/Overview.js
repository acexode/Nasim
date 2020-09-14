import React from "react";
import "./overview.scss";
const Overview = () => {
  return (
    <div>
      <div class="page-header">
        <div class="row">
          <div class="col-sm-12">
            <h3 class="page-title">Personal Details</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 d-flex">
          <div class="card profile-box flex-fill">
            <div class="card-body">
              <h3 class="card-title">
                {" "}
                <a
                  href="#"
                  class="edit-icon"
                  data-toggle="modal"
                  data-target="#personal_info_modal"
                >
                  <i class="fa fa-pencil"></i>
                </a>
                <a
                  href="#"
                  class="edit-icon mx-2"
                  data-toggle="modal"
                  data-target="#personal_info_modal"
                >
                  <i class="fa fa-trash"></i>
                </a>
              </h3>
              <div class="row">
                <div class="col-6">
                  <p className="label mb-0">Surname</p>
                  <span className="p-info">Akinola</span>
                </div>
                <div class="col-6">
                  <p className="label mb-0">First Name</p>
                  <span className="p-info">Michael</span>
                </div>
                <div class="col-6 mt-4">
                  <p className="label mb-0">Other Names</p>
                  <span className="p-info">Buhari</span>
                </div>
                <div class="col-6 mt-4">
                  <p className="label mb-0">Date of Birth</p>
                  <span className="p-info">19th Sep, 2020</span>
                </div>
                <div class="col-6 mt-4">
                  <p className="label mb-0">Email Address</p>
                  <span className="p-info">buhari@gmail.com</span>
                </div>
                <div class="col-6 mt-4">
                  <p className="label mb-0">Phone Number</p>
                  <span className="p-info">0820348375</span>
                </div>
                <div class="col-6 mt-4">
                  <p className="label mb-0">State of Origin</p>
                  <span className="p-info">Zamfara State</span>
                </div>
                <div class="col-6 mt-4">
                  <p className="label mb-0">Local Government Area of Orgin</p>
                  <span className="p-info">Gusau</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 d-flex">
          <div class="card profile-box flex-fill">
            <div class="card-body">
              
              <div class="row justify-content-center align-items-center pt-4">
                <img style={{width:'97px'}}  src="https://lh3.googleusercontent.com/ogw/ADGmqu91ogTVTc4zNxXTd7Epgf676Ya8QFmPuweVjqzS=s64-c-mo" class="img-fluid rounded-circle" alt="" />
                
              </div>
              <div class="row flex-column justify-content-center align-items-center ">               
                <p className="label mb-0">Sir Abubakar</p>
                  <span className="p-info">abudawud92@gmail.com</span>
                  <button className="btn  supervisor">Supervisor</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page-header">
        <div class="row">
          <div class="col-sm-12">
            <h3 class="page-title">Educational Background</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 d-flex">
          <div class="card profile-box flex-fill">
            <div class="card-body">
              <h3 class="card-title">
                {" "}
                <a
                  href="#"
                  class="edit-icon"
                  data-toggle="modal"
                  data-target="#personal_info_modal"
                >
                  <i class="fa fa-pencil"></i>
                </a>
                <a
                  href="#"
                  class="edit-icon mx-2"
                  data-toggle="modal"
                  data-target="#personal_info_modal"
                >
                  <i class="fa fa-trash"></i>
                </a>
              </h3>
              <div class="row">
                <div class="col-12 mb-4">
                  <p className="label mb-0">Highest Level of Education</p>
                  <span className="p-info">Bachelor’s Degree</span>
                </div>
                <div class="col-12 mb-4">
                  <p className="label mb-0">Institution</p>
                  <span className="p-info">Odessa State University</span>
                </div>
                <div class="col-12 mb-4">
                  <p className="label mb-0">Year of Graduation</p>
                  <span className="p-info">2016</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
