import React from 'react';
import {Text, View} from 'react-native';
import {Video, ResizeMode, AVPlaybackStatus} from 'expo-av';

import {IVideoPlayer} from './../../types/componentTypes/videoPlayerType';
import {styles} from './styles';

const VideoPlayer: React.FC<IVideoPlayer> = ({sourceUrl}) => {
  const video = React.useRef<Video | null>(null);
  const [status, setStatus] = React.useState<AVPlaybackStatus | null>(null);

  console.log(JSON.stringify(status), 'status====>');

  const playSound = React.useCallback(async () => {
    await video?.current?.playAsync();
  }, []);

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri:
            sourceUrl ??
            'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        onPlaybackStatusUpdate={setStatus}
      />
      <Text onPress={playSound}>Play</Text>
    </View>
  );
};

export default React.memo(VideoPlayer);
