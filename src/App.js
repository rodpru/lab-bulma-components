import React from "react";
import Navbar from "./components/Navbar";
import FormField from "./components/FormField";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
    </div>
  );
};

export default App;
