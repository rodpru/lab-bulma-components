import "bulma/css/bulma.css";
import React from "react";
import CoolButton from "./CoolButton";
import Navbar from "./Navbar";
import FormField from "./FormField";
function Signup() {
  return (
    <div>
      <Navbar />
      <form>
          <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
          <FormField label="Password" type="password" placeholder="*******************"/>
          <CoolButton className="button is-rounded my-class is-danger is-small" type="submit" span="Signup"/>
      </form>
    </div>
  );
}
export default Signup;
