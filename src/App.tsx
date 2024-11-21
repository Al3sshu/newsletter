import { useState } from 'react';
import successImg from './assets/icon-success.svg';

const App = () =>{
  const [email, setEmail]= useState('');
  const [emailErrorMessage, setEmailErrorMessage]= useState('');

  return(
    <div className="panel">

      <div className="form-container">
        <div className="img"></div>

        <div className="form-content">
          <div className="content">
            <h1>Stay updated!</h1>
            <p> Join 60,000+ product managers receiving monthly updates on:</p>

            <ul>
              <li>Product discovery and building what matters</li>
              <li>Measuring to ensure updates are a success</li>
              <li> And much more!</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="form">

            <div className="d-flex">
            <label htmlFor="email">Email Address</label> 
            <p>Valid email required</p>
            </div>
            
           
            <input className='danger' type="text" id="email" placeholder="email@company.com"/>
            <br/>
            <button type="submit"> Subscribe to monthly newsletter</button>
          </form>
        </div>
      </div>

      {/* Success and Error state template*/}

      <div className="message">
        <div className="success-msg">
          <img src={successImg} alt=''/>
          <h2>Thanks for subscribing!</h2>
          <p> A confirmation email has been sent to ash@loremcompany.com. 
          Please open it and click the button inside to confirm your subscription.</p>
        </div>

      <div className="err-msg">
        <p>You are already added to our waitlist. So stay tuned for more update</p>
      </div>

        <button className='dismiss-btn'>Dismiss message</button>
      </div>


    </div>
  );
};

export default App
