import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import './Styles/Contact.css';
import img3 from './Images/contactus.jpg'
const Contact = () => {
  //Declaring a new state variable 
      const [name, namechange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [message, messagechange] = useState("");

    const handlesubmit=(e)=> {
        e.preventDefault();
        let gtobj={name,email,phone,message};
        console.log(gtobj);

        fetch(" http://localhost:8000/GetInTouch",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(gtobj)
        }).then((res)=>{
            toast.success('Submitted.')
        }).catch((err)=>{
            toast.error('Failed ;'+err.message);
        });

    }
  return (
    <div className="bg">
    <div class="contact3 py-5">  
    {/* <img src={img3} class="img-fluid"/> */}
    <div class="row no-gutters">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="card-shadow">
            <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/2.jpg" class="img-fluid"/>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="contact-box ml-3">
              <h1 class="font-weight-light mt-2">CONTACT US</h1>
              <form class="mt-4" onSubmit={handlesubmit}>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group mt-2">
                    <label>Name <span className="errmsg">*</span></label>
                <input value={name} onChange={e => namechange(e.target.value)} className="form-control" required></input>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mt-2">
                        <label>Email<span className="errmsg">*</span></label>
            <input value={email} onChange={e => emailchange(e.target.value)} className="form-control" required></input>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mt-2">
                        <label>Phone <span className="errmsg">*</span></label>
                    <input value={phone} onChange={e => phonechange(e.target.value.replace(/^d{0-9}$/))} className="form-control" maxLength={10} required></input> </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mt-2">
                    <label>Message <span className="errmsg">*</span></label>
                    <textarea value={message} onChange={e => messagechange(e.target.value)} className="form-control" required></textarea>                    </div>
                  </div>
                  <div class="col-lg-12">
                    <button type="submit" class="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"><span> SUBMIT</span></button>
                  </div>
                </div>
              </form>
            </div>
            <ToastContainer/>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

  );
};

export default Contact;
