import React, { memo } from "react";

const ErrorIcon: React.FC = () => {
    return (
        <svg width="14px" style={{ marginRight: "0.2rem", marginTop: "0.1rem" }} height="14px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="errorIconTitle" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" color="red">
            {" "}
            <title id="errorIconTitle">Error</title> <path d="M12 8L12 13" /> <line x1="12" y1="16" x2="12" y2="16" /> <circle cx="12" cy="12" r="10" />{" "}
        </svg>
    );
};

export default memo(ErrorIcon);
