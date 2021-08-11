import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, HStack, Stack, Text } from "native-base";
import { Center } from "native-base";
import PropTypes from "prop-types";

export default function UserTime({ time, setTime }) {
  return (
    <View style={styles.container}>
      <Stack alignItems="center">
        <HStack space={5} alignItems="center">
          <Center>
            <Button onPress={() => setTime(time - 1)}>-</Button>
          </Center>
          <Center>
            <Text>{time}</Text>
          </Center>
          <Center>
            <Button onPress={() => setTime(time + 1)}>+</Button>
          </Center>
        </HStack>
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
});

UserTime.propTypes = {
  time: PropTypes.string,
  setTime: PropTypes.object,
};
