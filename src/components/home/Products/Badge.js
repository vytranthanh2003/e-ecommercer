import React from "react";

const Badge = ({
  text,
  icon = null,
  width = "92px",
  height = "35px",
  bgColor = "bg-primeColor",
  gradient = "",
  textColor = "text-white",
  alignment = "center",
  borderRadius = "rounded",
  border = false,
  borderColor = "border-transparent",
  hoverStyles = "hover:bg-black hover:text-white",
  tooltip = "",
  animation = "hover:scale-105",
  fontSize = "text-base",
  transitionSpeed = "duration-300",
  onClick = null,
  loading = false,
  disabled = false,
}) => {
  const alignmentClasses = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  return (
    <button
      className={`relative ${bgColor} ${gradient} ${textColor} ${borderRadius} 
      ${alignmentClasses[alignment]} flex items-center px-4 
      ${border ? `border ${borderColor}` : ""} ${hoverStyles} ${animation} 
      ${transitionSpeed} cursor-pointer ${fontSize} ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      }`}
      style={{ width, height }}
      title={tooltip}
      onClick={!disabled && onClick ? onClick : null} // Chỉ gọi khi không bị disabled
      disabled={disabled}
    >
      {loading ? (
        <span className="loader border-white border-t-transparent border-2 w-4 h-4 rounded-full animate-spin"></span>
      ) : (
        <>
          {icon && <span className="mr-2">{icon}</span>}
          <span className="font-semibold">{text}</span>
        </>
      )}
    </button>
  );
};

export default Badge;
