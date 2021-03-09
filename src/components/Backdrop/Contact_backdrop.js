import React from "react";
import "./Backdrop.css";

const Contact_backdrop = (props) => {
    const style={display:'none'}
    props.isopen === true ? style.display = 'block' : style.display = 'none'
    
  return (
    <div style={style} className="background">
      <div className="container">
          <div onClick={props.oncontact} className='close_drop_contact'>X</div>
        <div className="row input-container">
          <div className="col-xs-12">
            <div className="styled-input wide">
              <input type="text" required />
              <label>نام</label>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input">
              <input type="text" required />
              <label>ایمیل</label>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input" style={{'float':'right'}}>
              <input type="text" required />
              <label> شماره تلفن</label>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="styled-input wide">
              <textarea required></textarea>
              <label>پیام...</label>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="btn-lrg submit-btn">ارسال </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_backdrop;
