import React, { useState } from "react";
import { CommonWrapper, FormDiv, Heading, SubmitButton } from "./styles";
import shortid from "shortid";
import { useDispatch } from "react-redux";
import { userRegister } from "../../redux/action/allAction";
export const UserDetailForm = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
  });
  console.log("data==>", data);

  const handleChange = (e) => {
    setData({ ...data, [e.target.firstName]: e.target.value });
  };

  const handleSubmit = () => {
    Object.assign(data, { id: shortid.generate() });
    dispatch(userRegister(data));
  };

  return (
    <CommonWrapper>
      <Heading>Input Component</Heading>
      <FormDiv>
        <div className="input-group mb-5">
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            placeholder="First Name"
            aria-label="First Name"
            aria-describedby="basic-addon1"
            required
          />
        </div>
        <div className="input-group mb-5">
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            placeholder="Last Name"
            aria-label="Last Name"
            aria-describedby="basic-addon1"
          />
        </div>
        <select
          onChange={handleChange}
          className="form-select mb-5"
          aria-label="Default select example"
        >
          <option defaultValue>Select Gender</option>
          <option value="Mr">Male</option>
          <option value="Ms">Female</option>
        </select>
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      </FormDiv>
    </CommonWrapper>
  );
};
export default UserDetailForm;
