import { Outlet } from "react-router-dom";
import HeaderMain from "../components/header/Header";

export default function HomeLayout() {
  return (
    <div>
      <HeaderMain />
      <Outlet />
    </div>
  );
}
