import React from "react";
import { CommonWrapper, DeleteIcone, Heading, ListDiv } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { userDelete } from "../../redux/action/allAction";

export const UserDetailList = () => {
  const dispatch = useDispatch()

  const listdata = useSelector((state) => {
    return state.user.item;
  });

  return (
    <CommonWrapper>
      <Heading>List Component</Heading>
      <ListDiv>
        {listdata.map((item, index) => (
          <span key={index} style={{display:'flex',textAlign:'center'}}>
            <span style={{fontsize:'20px'}}>&#8228;</span>
            <p >{item.gender}{item.firstName}{item.lastName}</p>
            <DeleteIcone onClick={()=>dispatch(userDelete(item.id))}>&#x58;</DeleteIcone>
          </span>
          
        ))}
      </ListDiv>
    </CommonWrapper>
  );
};
export default UserDetailList;
