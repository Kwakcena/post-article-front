import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NaverLogin from "./NaverLogin";

export default function LoginPage() {
  const location = useLocation();
  const navigation = useNavigate();

  const getToken = () => {
    if (!location.hash) return;
    const token = location.hash.split("=")[1].split("&")[0];
    window.localStorage.setItem("access_token", token);
    navigation("/main");
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <>
      <h1>로그인 페이지</h1>
      <NaverLogin />
    </>
  );
}
