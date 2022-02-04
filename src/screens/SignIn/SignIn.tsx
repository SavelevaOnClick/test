import React, { Dispatch } from 'react';
import { useEffect, useState, useCallback, useMemo, useTranslation } from '@hooks';
import { View, Text, Image, TouchableOpacity } from '@components';
import {connect} from 'react-redux';
import {navigate} from '@services';
import styles from './styles'
import type {TGlobalState, TResetGlobal} from '@types';
import { ButtonPanel } from './ButtonPanel/ButtonPanel';
import { resetGlobal } from '@reducers/global';

// type TData = TGlobalState['data'];

type TProps = {
	resetGlobal: () => void,
	global: any;
}

const SignIn: React.FC<TProps> = ({resetGlobal, global}) => {
	const { t } = useTranslation()
  const onPressLogin = useCallback(() => console.log('login'), []); 
  console.log(global, '<----global');
	const onPressReset = useCallback(() => {
		resetGlobal();
		console.log(global);}, []);
	
	return (
	<View style={styles.container}>
		<Text>
			SignInScreen
		</Text>
		<ButtonPanel
		  onPressLogin={onPressLogin}
			onPressReset={onPressReset}
		/>
	</View>
	)
}
const mapStateToProps = (state: TGlobalState) => ({
  global: state.global
});
const mapDispatchToProps = (
  dispatch: Dispatch<TResetGlobal>,
) => ({
  resetGlobal: () => dispatch(resetGlobal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);