export const userRegister = (data) => {
  return {
    type: "ADD_USER",
    payload: data,
  };
};

export const userDelete = (id) => {
  return {
    type: "DELETE_USER",
    payload: id,
  };
};
