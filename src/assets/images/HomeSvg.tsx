import * as React from 'react';
import {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

type TProps = {
  size: number;
  color: string;
};
const SvgComponent: FC<TProps> = props => (
  <Svg data-name="Livello 1" viewBox="0 0 128 128" width={props.size} height={props.size}>
    <Path
      d="m127.12 60.22-11.66-11.66L69 2.05a7 7 0 0 0-9.9 0L12.57 48.53.88 60.22a3 3 0 0 0 4.24 4.24l6.57-6.57V121a7 7 0 0 0 7 7H46a7 7 0 0 0 7-7V81a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v40a7 7 0 0 0 7 7h27.34a7 7 0 0 0 7-7V57.92l6.54 6.54a3 3 0 0 0 4.24-4.24ZM110.34 121a1 1 0 0 1-1 1H82a1 1 0 0 1-1-1V81a7 7 0 0 0-7-7H54a7 7 0 0 0-7 7v40a1 1 0 0 1-1 1H18.69a1 1 0 0 1-1-1V51.9l45.6-45.61a1 1 0 0 1 1.41 0l45.63 45.63Z"
      fill={props.color}
    />
  </Svg>
);

export default SvgComponent;
