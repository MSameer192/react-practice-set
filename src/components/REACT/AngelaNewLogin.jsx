import React, { useState } from "react";

function App() {
  
  
  const [conmpleteName, setConmpleteName] = useState({
    fName: "",
    lName: ""
  });

  const handleChange = (event) => {
    let { value, name } = event.target;

    setConmpleteName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });


  };

  return (
    <div className="container">
      <h1>
        Hello {conmpleteName.fName} {conmpleteName.lName}
      </h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          value={conmpleteName.fName}
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
        />
        <input
          value={conmpleteName.lName}
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
