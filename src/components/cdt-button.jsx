import { Button, styled } from "@mui/material";
import PropTypes from "prop-types";

const ThemedButton = styled(Button)(({ theme, bsStyle }) => {
  console.log(theme);
  return {
    color:
      bsStyle === "primary"
        ? theme.palette.text.primary.main
        : theme.palette.text.secondary.main,
  };
});

export const CdtButton = (props) => {
  const { children, bsStyle, bsSize, type, disabled, onClick, bsClass } = props;
  return (
    <ThemedButton
      variant="contained"
      className={bsClass}
      color={bsStyle}
      size={bsSize}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </ThemedButton>
  );
};

CdtButton.defaultProps = {
  bsClass: "",
  bsStyle: "secondary",
  bsSize: "medium",
  type: "button",
  disabled: false,
};

CdtButton.propTypes = {
  children: PropTypes.node,
  bsClass: PropTypes.string,
  bsStyle: PropTypes.oneOf(["primary", "secondary"]),
  bsSize: PropTypes.oneOf(["medium", "small", "large"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
