import React, { memo } from "react";
import cw from "../assets/cw_logo.png";

const Header = ({img}) => {
  console.log("Rendering: Header Comp!");
  return (
    <div className="header">
      <img
        src={img ? img : cw}
        alt="CW_logo"
        style={{ margin: "1.5rem", maxHeight: "200px" }}
      />
    </div>
  );
};
export default memo(Header);

// 2.nd USAGE
// const Header = ({img}) => {
//     console.log("Rendering: Header Comp!");
//     return (
//       <div className="header">
//         <img
//           src={img ? img : cw}
//           alt="CW_logo"
//           style={{ margin: "1rem", maxHeight: "200px" }}
//         />
//       </div>
//     );
//   };
//   export default React.memo(Header);

// FIRST USAGE
// const Header = React.memo(({img}) => {
//   console.log("Rendering: Header Comp!");
//   return (
//     <div className="header">
//       <img
//         src={img ? img : cw}
//         alt="CW_logo"
//         style={{ margin: "1rem", maxHeight: "200px" }}
//       />
//     </div>
//   );
// });
// export default Header;



