import React from 'react'
import { useEffect, useState, useCallback, useMemo, useTranslation } from '@hooks'
import { View, Text, Image, TouchableOpacity } from '@components'
import {connect} from 'react-redux';
import {navigate} from '@services';
import styles from './styles'
import {Dispatch} from 'redux';
import type {TGlobalState} from '@types';

// type TData = TGlobalState['data'];

type TProps = {
	
}

const Home: React.FC<TProps> = ({}) => {
	const { t } = useTranslation()

	return (
	<View style={styles.container}>
		<Text>
			HomeScreen
		</Text>
	</View>
	)
}

const mapStateToProps = (state: TGlobalState) => ({
	// data: state.data
});

const mapDispatchToProps = (
  // dispatch: Dispatch<IGetData>,
) => ({
  // getData: (arg: IGetData['data']) => dispatch(getData(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);