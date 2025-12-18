import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
const SvgCall = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.033 3.333a3.333 3.333 0 0 1 2.634 2.634m-2.634-5.3a6 6 0 0 1 5.3 5.293m-.666 5.32v2a1.334 1.334 0 0 1-1.454 1.333 13.195 13.195 0 0 1-5.753-2.046 13 13 0 0 1-4-4 13.193 13.193 0 0 1-2.047-5.78A1.333 1.333 0 0 1 2.74 1.333h2A1.333 1.333 0 0 1 6.073 2.48a8.56 8.56 0 0 0 .467 1.873 1.333 1.333 0 0 1-.3 1.407l-.847.847a10.667 10.667 0 0 0 4 4l.847-.847a1.334 1.334 0 0 1 1.407-.3 8.56 8.56 0 0 0 1.873.467 1.333 1.333 0 0 1 1.147 1.353Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgCall;
