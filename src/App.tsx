

const App = () =>{
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

          <form className="form">
            <label htmlFor="email">Email Address</label> 
            <br/>
            <input type="text" id="email" placeholder="email@company.com"/>
            <br/>
            <button type="submit"> Subscribe to monthly newsletter</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
