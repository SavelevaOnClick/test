import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

type TProps = {
  size: number;
  color: string;
};
const SvgComponent: FC<TProps> = props => (
  <Svg width={props.size} height={props.size} data-name="Livello 1" viewBox="0 0 128 128" {...props}>
    <Path
      d="M50 5a45 45 0 1 0 45 45A45 45 0 0 0 50 5Zm0 88a43 43 0 1 1 30.406-12.595A42.861 42.861 0 0 1 50 93Z"
      fill={props.color}
    />
    <Path
      d="M72.933 41.708A11.99 11.99 0 0 0 61.151 31h-.023a11.735 11.735 0 0 0-6.573 2.162 17.352 17.352 0 0 0-3.98 3.895c-.216.29-.406.562-.575.813-.17-.251-.359-.523-.576-.813a17.35 17.35 0 0 0-3.98-3.895A11.735 11.735 0 0 0 38.873 31h-.023a11.99 11.99 0 0 0-11.782 10.708l-.003.04A58.236 58.236 0 0 0 27 43.705c.007 3.246 1.392 6.571 3.401 9.79a66.935 66.935 0 0 0 11.374 12.967c3.865 3.526 7.107 5.955 7.63 6.342a1.002 1.002 0 0 0 1.19 0 105.029 105.029 0 0 0 11.625-10.2 56.55 56.55 0 0 0 7.379-9.109c2.009-3.219 3.394-6.544 3.401-9.79 0-.219-.032-1.45-.064-1.957ZM56.877 64.984A106.04 106.04 0 0 1 50 70.748a104.075 104.075 0 0 1-10.787-9.54 54.618 54.618 0 0 1-7.117-8.774c-1.906-3.038-3.103-6.076-3.096-8.73 0-.112.032-1.382.058-1.798A9.99 9.99 0 0 1 38.862 33a9.73 9.73 0 0 1 5.45 1.81 15.376 15.376 0 0 1 3.51 3.444 17.132 17.132 0 0 1 .973 1.444c.108.18.188.323.24.418l.057.106.012.024.002.003a1 1 0 0 0 1.788 0l.002-.003a15.175 15.175 0 0 1 1.281-1.992 15.377 15.377 0 0 1 3.51-3.444 9.73 9.73 0 0 1 5.45-1.81 9.99 9.99 0 0 1 9.805 8.905c.026.416.059 1.686.058 1.799.007 2.653-1.19 5.69-3.096 8.73a65.075 65.075 0 0 1-11.027 12.55Z"
      fill={props.color}
    />
  </Svg>
);

export default SvgComponent;
