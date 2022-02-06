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
      d="M121 10.3h-13.8V3a3 3 0 0 0-6 0v7.3H80.4V3a3 3 0 0 0-6 0v7.3H53.6V3a3 3 0 0 0-6 0v7.3H26.8V3a3 3 0 0 0-6 0v7.3H7a7 7 0 0 0-7 7V121a7 7 0 0 0 7 7h88a3 3 0 0 0 .59-.06l.26-.08a1.76 1.76 0 0 0 .59-.25l.23-.12a3 3 0 0 0 .46-.38l30-30a3 3 0 0 0 .38-.46c0-.07.07-.14.11-.21a1.78 1.78 0 0 0 .25-.6c0-.09.06-.17.08-.27A3 3 0 0 0 128 95V17.3a7 7 0 0 0-7-7ZM98 98h19.76L98 117.76ZM7 16.3h13.8v7.3a3 3 0 0 0 6 0v-7.3h20.8v7.3a3 3 0 1 0 6 0v-7.3h20.8v7.3a3 3 0 1 0 6 0v-7.3h20.8v7.3a3 3 0 1 0 6 0v-7.3H121a1 1 0 0 1 1 1v14.3H6V17.3a1 1 0 0 1 1-1ZM6 121V37.6h116V92H95a3 3 0 0 0-3 3v27H7a1 1 0 0 1-1-1Z"
      fill={props.color}
    />
  </Svg>
);

export default SvgComponent;
