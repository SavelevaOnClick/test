import React, { Dispatch, useCallback } from 'react';
import {useTranslation} from '@hooks';
import {View, Text} from '@components';
import styles from './styles';
import { AcceptButton } from '../../components/buttons/AcceptButton/AcceptButton';
import { connect } from 'react-redux';
import { setFirstOpenApp } from '@reducers/global';
import { TGlobalState, TSetFirstOpenApp } from '@types';
import { changeLanguage } from 'i18next';

type TProps = {
  setFirst: (arg: boolean) => void;
};

const Onboarding: React.FC<TProps> = ({setFirst}) => {
  const {t} = useTranslation();
  const onPressWelcome = useCallback(() => setFirst(false), [])

  return (
    <View style={styles.container}>
      <Text>
	    WELCOMEEE
	  </Text>
    <AcceptButton
      btnTitle={t('start_btn_title')}
      onPress= {onPressWelcome}
     />
    </View>
  );
};

const mapDispatchToProps = (
  dispatch: Dispatch<TSetFirstOpenApp>
) => ({
  setFirst: (arg:boolean) => dispatch(setFirstOpenApp(arg)),
});

const mapStateToProps = (state: TGlobalState) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Onboarding);
