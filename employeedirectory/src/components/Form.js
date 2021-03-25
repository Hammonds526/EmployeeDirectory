import React from "react";

const styles = {
    form: {
        marginRight: "50%",
        
    },
    input: {
        width: "200px",
    }

}

function Form() {
  return (
      <div style={styles.form}>
    <input style={styles.input}
      type="email"
      class="form-control"
      id="exampleFormControlInput1"
      placeholder="Search"
    ></input>
    </div>
  );
}

export default Form;
