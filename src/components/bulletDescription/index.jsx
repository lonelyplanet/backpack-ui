import React, { PropTypes } from "react";
import radium from "radium";
import { color } from "../../../settings.json";
import Bullet from "../bullet";


const styles = {
  fontSize: "11px",
  letterSpacing: "0.4px",
  color: color.detailHeaderSmall,
  textTransform: "uppercase",
};

const BulletDescription = ({ description, style }) => (
  <div className="BulletDescription" style={[styles, style]}>
    {description.map((item, index) => {
      if (index !== 0) {
        return <span><Bullet space="both" />{item}</span>;
      }

      return <span>{item}</span>;
    })}
  </div>
);

BulletDescription.propTypes = {
  description: PropTypes.arrayOf(React.PropTypes.string).isRequired,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

export default radium(BulletDescription);
