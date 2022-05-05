import { useSelector } from "react-redux";

const useLogin = () => {
  const state = useSelector((state) => state.user);
//   console.log(state)
  return state;
};

export default useLogin;
