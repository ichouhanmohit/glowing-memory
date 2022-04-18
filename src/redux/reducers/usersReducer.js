const userReducer = (state = "", action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        item: [...state.item, action.payload],
      };
    case "DELETE_USER":
        console.log(state,'===',action);
      return {
        ...state,
        item: state.item.filter((user)=> user.id != action.payload)
        // filter((user)=>user.id !== action.payload)
      };
    default:
      return state;
  }
};

export default userReducer;
