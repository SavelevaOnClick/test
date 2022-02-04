import { Text } from "@components";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

type TProps = {
  onPress: () => void,
  btnTitle: string,
}
export const AcceptButton: FC<TProps> = ({onPress, btnTitle}) => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity
     onPress={onPress}
     style={styles.btn}
     >
       <Text style={styles.test}>
        {btnTitle}
       </Text>
       </TouchableOpacity>
  );
}