import * as React from 'react';
import {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

type TProps = {
  size: number;
  color: string;
};
const SvgComponent: FC<TProps> = props => (
  <Svg width={props.size} height={props.size} data-name="Livello 1" viewBox="0 0 128 128">
    <Path
      d="M64 0a64 64 0 1 0 64 64A64.07 64.07 0 0 0 64 0Zm0 122a58 58 0 1 1 58-58 58.07 58.07 0 0 1-58 58Z"
      fill={props.color}
    />
    <Path
      d="M74.12 35.88a3 3 0 0 0-4.24 0l-26 26a3 3 0 0 0 0 4.24l26 26a3 3 0 0 0 4.24-4.24L50.24 64l23.88-23.88a3 3 0 0 0 0-4.24Z"
      fill={props.color}
    />
  </Svg>
);

export default SvgComponent;
