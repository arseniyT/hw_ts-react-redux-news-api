import React from 'react';

const Preloader = ({msg, isSpinner}) => {
    let loaderClassType = isSpinner ? "loader" : "msg";

    return (
        <div className="preloader">
            <span className={loaderClassType}>
                {msg}
            </span>
        </div>
    )
};

export default Preloader;