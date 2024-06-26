import React, {useCallback, useMemo} from 'react';
import {
  LayoutChangeEvent,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles.ts';
import ActivityIndicator from '../ActivityIndicator';
import {accentBlue, linkBlue} from '../../assets/colors.ts';

interface Props {
  kind?: 'primary' | 'outline';
  text: string;
  onPress?: () => void;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({
  text,
  kind = 'primary',
  onPress,
  loading,
  style,
  disabled = false,
}) => {
  const [textWidth, setTextWidth] = React.useState(0);
  const [buttonWidth, setButtonWidth] = React.useState(0);

  const containerStyle = useMemo(
    () => [
      styles.container,
      styles[`button_kind_${kind}`],
      disabled ? styles[`button_kind_${kind}_disabled`] : {},
    ],
    [kind, disabled],
  );

  const textStyle = useMemo(
    () => [
      styles.text,
      styles[`text_kind_${kind}`],
      disabled ? styles[`text_kind_${kind}_disabled`] : {},
    ],
    [kind, disabled],
  );

  const onButtonLayout = useCallback(
    (e: LayoutChangeEvent) => setButtonWidth(e.nativeEvent.layout.width / 2),
    [],
  );
  const onTextLayout = useCallback(
    (e: LayoutChangeEvent) => setTextWidth(e.nativeEvent.layout.width / 2),
    [],
  );

  const buttonContent = (
    <TouchableOpacity
      style={styles.touchable}
      onPress={onPress}
      disabled={disabled}
      onLayout={onButtonLayout}>
      <Text style={textStyle} onLayout={onTextLayout}>
        {text}
      </Text>
      {loading && <ActivityIndicator right={buttonWidth - textWidth - 30} />}
    </TouchableOpacity>
  );

  return (
    <View style={style}>
      {kind === 'primary' && !disabled ? (
        <LinearGradient
          colors={[accentBlue, linkBlue]}
          start={{x: 0, y: 0.25}}
          end={{x: 1, y: 1.5}}
          style={containerStyle}>
          {buttonContent}
        </LinearGradient>
      ) : (
        <View style={containerStyle}>{buttonContent}</View>
      )}
    </View>
  );
};

export default Button;
