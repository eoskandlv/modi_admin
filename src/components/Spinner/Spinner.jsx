import React from "react";
import { GridLoader } from "react-spinners";
import "./Spinner.scss"

const Loading = ({ loading }) => {
    if (loading == true) {
        return (
          <div className="spinner">
            <GridLoader
              color="#ffffff"
              loading={loading}
              size={25}
              speedMultiplier={0.8}
              margin={5}
            />
          </div>
        );
    }
};

export default Loading;
