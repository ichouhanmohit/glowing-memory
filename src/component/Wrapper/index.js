import React from "react";
import UserDetailForm from "../Form";
import UserDetailList from "../List";
import { CommonWrapper } from "./styles";

export const Wrapper = () => {
  return (
    <CommonWrapper>
      <UserDetailForm />
      <UserDetailList />
    </CommonWrapper>
  );
};
export default Wrapper;
