import React from "react";
import { Tooltip } from "reactstrap";
import PropTypes from "prop-types";
import { Avatar } from "@mui/material";

const tooltipStyle = {
  backgroundColor: "white",
  border: "2px solid lightgrey",
  maxWidth: "400px",
};

const HovarableImage = ({ id, src, imgPreviewProps = {}, ...props }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const ID = `image_hover_tooltip_${id}`;
  const toggleTooltip = React.useCallback(() => setIsOpen((prev) => !prev), []);
  return (
    <>
      <Avatar id={ID} src={src} alt={props.alt} {...props}   sx={{ width: 56, height: 56 }}  style={{margin:5}}/>
      <Tooltip
        placement="left"
        isOpen={isOpen}
        target={ID}
        toggle={toggleTooltip}
        style={tooltipStyle}
      >
        <img
          style={{ maxWidth: "300px" }}
          src={src}
          alt={props.alt}
          {...imgPreviewProps}
        />
      </Tooltip>
    </>
  );
};

export default HovarableImage;

HovarableImage.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  imgPreviewProps: PropTypes.object,
};
