import React from "react";

const PlayBtn = () => {
  return (
    <div className=" play w-fit p-5 h-fit rounded-full">
      <svg
        width="33"
        height="33"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.2301 6.2186C6.2301 5.14061 6.2301 4.60162 6.45487 4.3045C6.65068 4.04566 6.94996 3.88549 7.27394 3.86614C7.64584 3.84394 8.09431 4.14292 8.99125 4.74088L20.6635 12.5224C21.4047 13.0165 21.7752 13.2635 21.9043 13.5749C22.0172 13.8471 22.0172 14.1531 21.9043 14.4253C21.7752 14.7367 21.4047 14.9837 20.6635 15.4778L8.99125 23.2594C8.09431 23.8573 7.64584 24.1563 7.27394 24.1341C6.94996 24.1147 6.65068 23.9546 6.45487 23.6957C6.2301 23.3986 6.2301 22.8596 6.2301 21.7816V6.2186Z"
          stroke="#FCFCFD"
          strokeWidth="2.22"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default PlayBtn;
