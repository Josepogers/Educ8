import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert } from "react-native";
import { styles } from "../styles/styleVideoPlayer";
import YoutubePlayer from "react-native-youtube-iframe";

export default function Player({ idVideo }) {
  const [playing, setPlaying] = useState()
  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.playersArea}>
        <YoutubePlayer
          height={250}
          width={400}
          play={playing}
          videoId={idVideo}
          onChangeState={onStateChange}
        />
      </View>
    </View>)
}