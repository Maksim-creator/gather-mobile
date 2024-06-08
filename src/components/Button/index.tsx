import React from "react";

interface Props {
  text: string;
}

const Button: React.FC<Props> = ({text}) => {
  return <></> // тут сама кнопка  TouchableOpacity, а внутри текст
}

export default Button
