import { useDispatch, useSelector } from "react-redux";
import { fetchGreeting } from "../redux/greeting/greetingSlice";
import { useEffect } from "react";

const Greeting = () => {
  const { message, isLoading } = useSelector((state) => state.greeting);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);
  if (isLoading) {
    return <h1>Loading.....</h1>;
  }
  return <h1>{message}</h1>;
};

export default Greeting;
