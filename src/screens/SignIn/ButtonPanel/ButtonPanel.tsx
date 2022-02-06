import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { AcceptButton } from '../../../components/buttons/AcceptButton/AcceptButton';
import { ResetButton } from '../../../components/buttons/ResetButton/ResetButton';
import {styles} from './styles';

type TProps = {
	onPressReset: () => void,
  onPressLogin: () => void,
} 

export const ButtonPanel: FC<TProps> = ({onPressLogin, onPressReset}) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <ResetButton
		  onPress={onPressReset}
		/>
		  <AcceptButton
		    onPress={onPressLogin}
			  btnTitle={t('login_btn')}
			/>
    </View>
  );
}