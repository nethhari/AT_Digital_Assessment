import "react";
import PropTypes from "prop-types";

const ConsultationButton = ({ text }) => {
  return (
    <button className="bg-[#F28D35] font-medium text-white py-[12px] px-[20px] rounded-[4px]">
      {text}
    </button>
  );
};

ConsultationButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ConsultationButton;