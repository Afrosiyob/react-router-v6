import { Button } from "antd";
import React from "react";

import "./BtnPrimary.scss";

const BtnPrimary = ({ icon = false, label = "button" }) => {
  return (
    <Button className="btn-primary" icon={icon}>
      {label}
    </Button>
  );
};

export default BtnPrimary;
