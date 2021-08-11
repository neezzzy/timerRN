import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import useTimer from "../hooks/useTimer";
import { formatTime } from "./utils";
import { Button, Center } from "native-base";
import { useFonts } from "expo-font";
import { Audio } from "expo-av";
import { Text } from "native-base";
import UserTime from "./UserTime";
import bellSound from "../assets/sounds/bell.mp3";
import digitalFont from "../assets/fonts/Digital.ttf";

export default function Timer() {
  const [sound, setSound] = React.useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(bellSound);
    setSound(sound);
    await sound.playAsync();
    handlePause();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const [loaded] = useFonts({digitalFont});

  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
  } = useTimer(0);

  const [time, setTime] = useState(0);
  let initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      time === timer ? playSound() : null;
    }
  }, [timer]);

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.timer}>
      <Text style={styles.clockText}>{formatTime(timer)}</Text>
      <Center>
        <Text style={styles.title}>Timer:</Text>
      </Center>
      <UserTime time={time} setTime={setTime} />

      {!isActive && !isPaused ? (
        <Button style={styles.btn} onPress={handleStart}>
          Start
        </Button>
      ) : isPaused ? (
        <Button style={styles.btn} onPress={handlePause}>
          Pause
        </Button>
      ) : (
        <Button style={styles.btn} onPress={handleResume}>
          Resume
        </Button>
      )}
      <Button style={styles.btn} onPress={handleReset} isDisabled={!isActive}>
        Reset
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  timer: {
    backgroundColor: "#FFFFFF",
    borderWidth: 5,
    borderRadius: 5,
    padding: 5,
  },

  clockText: {
    fontSize: 38,
    color: "#CCA43B",
    backgroundColor: "#242F40",
    fontFamily: "digitalFont",
  },
  title: {},
  btn: {
    margin: 2,
  },
});
