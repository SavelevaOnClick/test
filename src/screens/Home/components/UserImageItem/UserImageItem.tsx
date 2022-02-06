import React, {FC, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Image, View} from '@components';
import {useCallback} from '@hooks';
import HeartLikeSvg from '../../../../assets/images/HeartLikeSvg';
import HeartLikedSvg from '../../../../assets/images/HeartLikedSvg';
import {TUsers} from '../../Home';
import styles from './styles';

type TProps = {
  userData: TUsers;
};
export const UserImageItem: FC<TProps> = ({userData}) => {
  const [isFavorite, setIsFavorite] = useState<Boolean>(false);
  const onPressLike = useCallback(() => setIsFavorite(prevValue => !prevValue), []);
  return (
    <View style={styles.imgWrapper}>
      <Image source={{uri: userData.avatar_url}} style={styles.scrollImg} />
      <TouchableOpacity style={styles.svg} onPress={onPressLike}>
        {isFavorite ? <HeartLikedSvg size={35} color="red" /> : <HeartLikeSvg size={35} color="red" />}
      </TouchableOpacity>
    </View>
  );
};
