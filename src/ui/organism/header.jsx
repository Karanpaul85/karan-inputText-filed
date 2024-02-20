import { HeaderIcons } from "../molecules/headerIcons";
import { Search } from "../molecules/search";
import { PincodeLocation } from "../molecules/location";
import { Logo } from "../atom/logo";
import TextField from "../atom/TextField";
import { useState } from "react";
import SVGIcon from "../atom/SVGIcon";
export function Header() {
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
    <>
      <div className="flex flex-row ml-4 mr-4">
        <div className="flex basis-1/2">
          <div className="basis-1/2 hidden sm:block">
            <Logo></Logo>
          </div>
          <div className="basis-1/2">
            <PincodeLocation></PincodeLocation>
          </div>
        </div>
        <div className="flex basis-1/2">
          <div className="basis-1/2 hidden sm:block">
            <Search></Search>
          </div>
          <div className="basis-1/2">
            <HeaderIcons></HeaderIcons>
          </div>
        </div>
      </div>
      <div className="bg-slate-200 ml-4 mr-4">
        <Search></Search>
      </div>
      <form className="flex w-full flex-wrap mt-10">
        <div className="w-3/12 p-2">
          <TextField
            type={showPassword ? "text" : "password"}
            placeholder="Please enter your password"
            isRequired={true}
            variant="primary"
            message="This is erorr"
            isError={true}
            endAdornment={
              <SVGIcon
                name={showPassword ? "eyeSlash" : "eye"}
                onClick={showPasswordFun}
                divider
              />
            }
          />
        </div>
        <div className="w-3/12 p-2">
          <TextField
            type={showPassword ? "text" : "password"}
            placeholder="Please enter your password"
            isRequired={true}
            variant="primary"
            message="Message is correct"
            inputValue="8130464110"
            isSccess={true}
            endAdornment={
              <SVGIcon
                name="checkCircle"
                color="green"
                onClick={showPasswordFun}
                divider
              />
            }
          />
        </div>
        <div className="w-3/12 p-2">
          <TextField
            type={showPassword ? "text" : "password"}
            placeholder="Please enter your password"
            isRequired={true}
            variant="primary"
            message="This is erorr"
            isSccess={true}
            endAdornment={
              <SVGIcon
                name={showPassword ? "eyeSlash" : "eye"}
                color="green"
                onClick={showPasswordFun}
                divider
              />
            }
          />
        </div>
        <div className="w-3/12 p-2">
          <TextField
            type="search"
            placeholder="What are you looking for?"
            isRequired={true}
            inputValue={textVal}
            onChange={(e) => setTextVal(e.target.value)}
            variant="primary"
            startAdornment={
              <SVGIcon
                name="search"
                color="red"
                onClick={searchIconClick}
                divider
              />
            }
            endAdornment={
              <SVGIcon
                name="mic"
                color="red"
                onClick={micClick}
                divider={true}
              />
            }
          />
        </div>
        <div className="w-3/12 p-2">
          <TextField
            type="search"
            placeholder="What are you looking for?"
            isRequired={true}
            variant="outline-none"
            startAdornment={<SVGIcon name="mapPin" />}
          />
        </div>
        <div className="w-3/12 p-2">
          <TextField
            disabled
            readOnly
            type="text"
            isRequired={true}
            variant="primary"
            label="Enter Name"
            inputValue={textVal}
            onChange={(e) => setTextVal(e.target.value)}
            startAdornment={<SVGIcon name="envelope" onClick={micClick} />}
            endAdornment={
              <SVGIcon name="arrowRight" onClick={micClick} divider={true} />
            }
          />
        </div>
        <div className="w-3/12 p-2">
          <TextField
            type="text"
            isRequired={true}
            variant="primary"
            label="Enter Name"
            inputValue={textVal}
            autoFocus
            isAutoComplete="on"
            onChange={(e) => setTextVal(e.target.value)}
          />
        </div>
        <div className="w-3/12 p-2">
          <TextField
            type="text"
            isRequired={true}
            variant="primary"
            label="Enter Name"
            inputValue={textVal}
            maxLength={5}
            minLength={3}
            pattern="[A-Za-z]{3}"
            autoComplete="off"
            onChange={(e) => setTextVal(e.target.value)}
          />
        </div>
        <div className="w-3/12 p-2">
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
        </div>
        <div className="w-3/12 p-2">
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
                <SVGIcon
                  name="xCircle"
                  color="lightGrey"
                  onClick={() => setTextVal("")}
                />
              ) : (
                ""
              )
            }
          />
        </div>
        <div className="w-3/12 p-2">
          <TextField
            type="tel"
            isRequired={true}
            variant="withFlag"
            placeholder="please enter number"
            inputValue={textVal}
            onChange={(e) => setTextVal(e.target.value)}
            endAdornment={
              textVal.length ? (
                <SVGIcon
                  name="xCircle"
                  color="lightGrey"
                  onClick={() => setTextVal("")}
                />
              ) : (
                <SVGIcon name="arrowRight" onClick={micClick} divider />
              )
            }
            startAdornment={
              <span
                onClick={micClick}
                divider={true}
                className="flex items-center"
              >
                <SVGIcon name="envelope" classes="mr-1 w-4 h-4" /> +91
                <SVGIcon name="chevronDown" classes="ml-1 w-4 h-4" />
              </span>
            }
          />
        </div>
      </form>
    </>
  );
}
