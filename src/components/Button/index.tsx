import React, {useCallback, useMemo} from 'react';
import {
  LayoutChangeEvent,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import styles from './styles.ts';
import ActivityIndicator from '../ActivityIndicator';

interface Props {
  kind?: 'primary' | 'outline';
  text: string;
  onPress?: () => void;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
}

const Button: React.FC<Props> = ({
  text,
  kind = 'primary',
  onPress,
  loading,
  style,
}) => {
  const [textWidth, setTextWidth] = React.useState(0);
  const [buttonWidth, setButtonWidth] = React.useState(0);

  const containerStyle = useMemo(
    () => [styles.container, styles[`button_kind_${kind}`]],
    [kind],
  );

  const textStyle = useMemo(
    () => [styles.text, styles[`text_kind_${kind}`]],
    [kind],
  );

  const onButtonLayout = useCallback(
    (e: LayoutChangeEvent) => setButtonWidth(e.nativeEvent.layout.width / 2),
    [],
  );
  const onTextLayout = useCallback(
    (e: LayoutChangeEvent) => setTextWidth(e.nativeEvent.layout.width / 2),
    [],
  );

  return (
    <View style={style}>
      <TouchableOpacity
        style={containerStyle}
        onPress={onPress}
        onLayout={onButtonLayout}>
        <Text style={textStyle} onLayout={onTextLayout}>
          {text}
        </Text>
        {loading && <ActivityIndicator right={buttonWidth - textWidth - 30} />}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
