import { allIcons } from "@/src/utils/icons";
import PropTypes from "prop-types";

const SVGIcon = ({ name = "user", color = "", classes = "w-4 h-4" }) => {
  function checkColor(color) {
    let colorType;
    switch (color) {
      case "red":
        colorType = "text-red-500";
        break;
      case "green":
        colorType = "text-green-500";
        break;
        case "lightGrey":
        colorType = "text-gray-300";
        break;
      default:
        colorType = "text-grey-500";
    }
    return colorType;
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className={`${classes} ${checkColor(color)}`}
    >
      {allIcons[name]}
    </svg>
  );
};

SVGIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  classes: PropTypes.string,
};

export default SVGIcon;
