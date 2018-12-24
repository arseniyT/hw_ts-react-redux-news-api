import React from "react";

interface IPreloaderProps {
    msg: string;
    isSpinner: boolean;
}

const Preloader: React.SFC<IPreloaderProps> = (props: IPreloaderProps) => {
    const {isSpinner, msg} = props;
    const loaderClassType = isSpinner ? "loader" : "msg";

    return (
        <div className="preloader">
            <span className={loaderClassType}>
                {msg}
            </span>
        </div>
    );
};

export default Preloader;
