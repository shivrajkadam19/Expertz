import * as React from 'react';
import { Dimensions, Image, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { images } from './data';

const ImageCarousel = () => {
    const width = Dimensions.get('window').width;
    return (
        <Carousel
            loop
            width={width}
            height={200}
            autoPlay={true}
            // mode='parallax'
            data={images}
            scrollAnimationDuration={2000}
            renderItem={({ item }) => (
                <View
                    style={{
                        flex: 1,
                        // borderWidth: 1,
                        justifyContent: 'center',
                        paddingHorizontal: 30
                    }}
                >
                    <Image
                        source={item}
                        style={{ width: '100%', height: 180, borderRadius: 20 }}
                        resizeMode="cover"
                    />
                </View>
            )}
        />
    );
}

export default ImageCarousel;
