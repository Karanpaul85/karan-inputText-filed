"use client";
import Image from "next/image";
import { Header } from "../../ui/organism/header";
import { useState } from "react";

export default function Home() {
  const [textVal, setTextVal] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  function micClick() {
    alert("mick click");
  }
  function searchIconClick() {
    alert("searchIconClick click");
  }

  function showPasswordFun() {
    setShowPassword(!showPassword);
  }
  function showInputClearBtn(inputVal, inputSetState) {
    console.log("clearText", inputVal, inputSetState);
  }
  return (
    <main>
      <Header></Header>
      <div className="mb-4">This is homepage</div>
    </main>
  );
}
