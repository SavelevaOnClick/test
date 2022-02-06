import React, {FC} from 'react';
import Svg, {Circle, G, Path} from 'react-native-svg';

type TProps = {
  size: number;
  color: string;
};
const SvgComponent: FC<TProps> = props => (
  <Svg data-name="Layer 1" viewBox="0 0 512 512" width={props.size} height={props.size} {...props}>
    <G data-name="Heart Icon">
      <Circle cx={256} cy={256} r={256} fill="transparent" />
      <Path
        d="M256 402.67C149.12 343.33 88.35 262.12 103.8 201.05c5.41-21.35 23.91-55.18 58-63.72 32.12-8.07 69.37 8.61 94.25 42.35 24.88-33.74 62.13-50.42 94.25-42.35 34 8.54 52.32 42.43 57.95 63.72C424.1 261.33 363.61 343.56 256 402.67Z"
        fill={props.color}
      />
    </G>
  </Svg>
);

export default SvgComponent;
