"use client";
import InputAdornment from "@/src/components/atom/InputAdornment";
import SVGIcon from "@/src/components/atom/SVGIcon";
import TextField from "@/src/ui/atom/TextField";
import React, { useState } from "react";

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

  return (
    <main className="flex p-24">
      <div className="inputSearch">
        <form>
          <TextField
            type={showPassword ? "text" : "password"}
            placeholder="Please enter your password"
            isRequired={true}
            variant="primary"
            message="This is erorr"
            isError={true}
            endAdornment={
              <InputAdornment onClick={showPasswordFun} divider>
                <SVGIcon name={showPassword ? "eyeSlash" : "eye"} />
              </InputAdornment>
            }
          />
          <TextField
            type={showPassword ? "text" : "password"}
            placeholder="Please enter your password"
            isRequired={true}
            variant="primary"
            message="Message is correct"
            inputValue="8130464110"
            isSccess={true}
            endAdornment={
              <InputAdornment onClick={showPasswordFun} divider>
                <SVGIcon name="checkCircle" color="green" />
              </InputAdornment>
            }
          />
          <TextField
            type={showPassword ? "text" : "password"}
            placeholder="Please enter your password"
            isRequired={true}
            message="This is erorr"
            isSccess={true}
            endAdornment={
              <InputAdornment onClick={showPasswordFun} divider>
                <SVGIcon
                  name={showPassword ? "eyeSlash" : "eye"}
                  color="green"
                />
              </InputAdornment>
            }
          />
          <TextField
            type="search"
            placeholder="What are you looking for?"
            isRequired={true}
            inputValue={textVal}
            startAdornment={
              <InputAdornment onClick={searchIconClick} divider>
                <SVGIcon name="search" color="red" />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment onClick={micClick} divider={true}>
                <SVGIcon name="mic" color="red" />
              </InputAdornment>
            }
          />
          <TextField
            type="search"
            placeholder="What are you looking for?"
            isRequired={true}
            variant="outline-none"
            startAdornment={
              <InputAdornment>
                <SVGIcon name="mapPin" />
              </InputAdornment>
            }
          />
          <TextField
            disabled
            readOnly
            type="radio"
            isRequired={true}
            variant="primary"
            label="Enter Name"
            inputValue={textVal}
            onChange={(e) => setTextVal(e.target.value)}
            startAdornment={
              <InputAdornment onClick={micClick}>
                <SVGIcon name="envelope" />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment onClick={micClick} divider={true}>
                <SVGIcon name="arrowRight" />
              </InputAdornment>
            }
          />
          <TextField
            type="text"
            isRequired={true}
            variant="primary"
            label="Enter Name"
            inputValue={textVal}
            autofocus
            isAutoComplete="on"
            onChange={(e) => setTextVal(e.target.value)}
          />
          <TextField
            type="text"
            isRequired={true}
            variant="primary"
            label="Enter Name"
            inputValue={textVal}
            maxLength={5}
            minLength={3}
            pattern="[A-Za-z]{3}"
            autoFocus
            autoComplete="off"
            onChange={(e) => setTextVal(e.target.value)}
          />
          <TextField
            type="text"
            isRequired={true}
            variant="primary"
            label="Enter Name"
            inputValue={textVal}
            isError={true}
            message="Please enter vailed name"
            onChange={(e) => setTextVal(e.target.value)}
          />
          <TextField
            type="text"
            isRequired={true}
            variant="primary"
            label="Enter Name"
            inputValue={textVal}
            isError={true}
            message="Please enter vailed name"
            onChange={(e) => setTextVal(e.target.value)}
            endAdornment={
              textVal.length ? (
                <InputAdornment onClick={() => setTextVal("")}>
                  <SVGIcon name="xCircle" color="lightGrey" />
                </InputAdornment>
              ) : (
                ""
              )
            }
          />
          <TextField
            type="tel"
            isRequired={true}
            variant="withFlag"
            placeholder="please enter number"
            inputValue={textVal}
            onChange={(e) => setTextVal(e.target.value)}
            message="This is erorr"
            isError={true}
            endAdornment={
              textVal.length ? (
                <InputAdornment onClick={() => setTextVal("")}>
                  <SVGIcon name="xCircle" color="lightGrey" />
                </InputAdornment>
              ) : (
                <InputAdornment onClick={micClick} divider>
                  <SVGIcon name="arrowRight" />
                </InputAdornment>
              )
            }
            startAdornment={
              <InputAdornment onClick={micClick} divider={true}>
                <SVGIcon name="envelope" classes="mr-1 w-4 h-4" /> +91
                <SVGIcon name="chevronDown" classes="ml-1 w-4 h-4" />
              </InputAdornment>
            }
          />
        </form>
      </div>
    </main>
  );
}
