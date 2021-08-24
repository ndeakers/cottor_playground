import React, { useEffect, useState } from "react";
import Cotter from "cotter"; //  1️⃣  Import Cotter

function App() {
  const [payload, setpayload] = useState(null);

  //  2️⃣ Initialize and show the form
  useEffect(() => {
    var cotter = new Cotter(process.env.REACT_APP_API_KEY_ID); // 👈 Specify your API KEY ID here
    cotter
      .withFormID("form_default") // Use customization for form "form_default"
      .signInWithLink() // use .signInWithOTP() to send an OTP
      .showEmailForm()  // use .showPhoneForm() to send magic link to a phone number 
      .then(response => {
        setpayload(response); // show the response in our state
        // send to backendHERE with axios. try this out tomorrow.
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {/*  3️⃣  Put a <div> that will contain the form */}
      <div id="cotter-form-container" style={{ width: 300, height: 300 }} />

      <pre>{JSON.stringify(payload, null, 4)}</pre>
    </div>
  );
}

export default App;

