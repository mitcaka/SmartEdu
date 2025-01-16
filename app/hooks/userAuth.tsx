/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";

export default function UserAuth() {
  const { user } = useSelector((state: any) => state.auth);
  
  if (user) {
    return true;
  } else {
    return false;
  }
}
