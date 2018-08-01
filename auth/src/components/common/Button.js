import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = props => {
  const { onPress, children } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyles}>
      <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyles: {
    flex: 1,
    alignSelf: "stretch",
    background: "red",
    borderWidth: 1,
    borderColor: "#007aff",
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    paddingBottom: 1
  },
  textStyle: {
    alignSelf: "center",
    backgroundColor: "#fff",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10,
    color: "#007aff"
  }
};

export { Button };
