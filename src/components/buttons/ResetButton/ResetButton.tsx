import { Text } from "@components";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native-gesture-handler";
import { style } from "./styles";

type TProps = {
  onPress: () => void,
}
export const ResetButton: FC<TProps> = ({onPress}) => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity
     onPress={onPress}
     style={style.btn}
    >
      <Text style={style.test}>
        {t('reset_btn')}
      </Text>
    </TouchableOpacity>
  );
}