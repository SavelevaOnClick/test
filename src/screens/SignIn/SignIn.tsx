import React, { Dispatch } from 'react';
import { useEffect, useState, useCallback, useMemo, useTranslation } from '@hooks';
import { View, Text, Image, TouchableOpacity } from '@components';
import {connect} from 'react-redux';
import {navigate} from '@services';
import styles from './styles'
import type {TGlobalState, TResetGlobal, TSetToken} from '@types';
import { ButtonPanel } from './ButtonPanel/ButtonPanel';
import { resetGlobal, setToken } from '@reducers/global';

// type TData = TGlobalState['data'];

type TProps = {
	resetGlobal: () => void,
	global: any;
	setToken: (arg: string) => void
}

const SignIn: React.FC<TProps> = ({resetGlobal, global, setToken}) => {
	const { t } = useTranslation()
  const onPressLogin = useCallback(() => setToken('AuthToken'), []); 
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
  dispatch: Dispatch<TResetGlobal | TSetToken>,
) => ({
  resetGlobal: () => dispatch(resetGlobal()),
	setToken: (arg: string) => dispatch(setToken(arg))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);