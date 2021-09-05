import React, { useState, useEffect } from "react";

const Button = (props) => {
    const { icon, label, onClickHandler, className,disabled } = props;

    return (
        <button className={className} onClick={onClickHandler} disabled={disabled}>
          {icon} {label}
        </button>
    );
};

export default Button;