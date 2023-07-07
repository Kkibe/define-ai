import React, { useRef, useState } from "react";
import { FlatList, Image, StatusBar, Text, TouchableOpacity, View, SafeAreaView, StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get('window');
const COLORS = {primary : '#07c1dd', white: '#FFF'};


const slides = [
    {
        id: 1,
        image: require('../assets/DefineAI.png'),
        title: 'Define AI',
        subtitle: 'AI Definition Assistant'
    },
    {
        id: 2,
        image: require('../assets/featured.png'),
        title: 'Powered By ChatGPT',
        subtitle: 'An Inteliligent Virtual Assistant'
    },
    {
        id: 3,
        image: require('../assets/ai.png'),
        title: 'Define A Word',
        subtitle: 'Designed To Give A Meaning'
    }
]

const Slide = ({item}) => {
    return <View style={{alignItems: 'center'}}>
        <Image source={item.image} style={{height: '75%', width, resizeMode: 'cover', paddingHorizontal: 10}}/>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
}

export default Onboarding = ({navigation}) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const ref = useRef(null);
    const Footer = () => {
        return <View 
            style={{
                height: height * 0.25, 
                justifyContent: 'space-between', 
                paddingHorizontal: 20}}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: 20
                    }}>
                        {slides.map((_, index) => (
                            <View key={index} style={[styles.indicator, currentSlideIndex == index && {
                                backgroundColor: COLORS.white,
                                width: 25
                            }]} />
                        ))}
                    </View>

                    <View style={{
                        marginBottom: 20
                    }}>
                        {
                            currentSlideIndex == slides.length -1 ? (
                                <View style={{height: 50}}>
                                    <TouchableOpacity style={[styles.btn]} onPress={() => {
                                        navigation.replace('Start');
                                    }}>
                                        <Text style={{fontWeight: 'bold', fontSize: 15}}>GET STARTED</Text>
                                    </TouchableOpacity>
                                </View>) : (
                                        <View style={{flexDirection: 'row'}}>
                                            <TouchableOpacity style={[styles.btn, {backgroundColor: 'transparent', borderWidth: 1, borderColor: COLORS.white}]} onPress={skip}>
                                                <Text style={{fontWeight: 'bold', fontSize: 15, color: COLORS.white}}>SKIP</Text>
                                            </TouchableOpacity>
                                            <View style={{width: 15}}/>
                                            <TouchableOpacity style={[styles.btn]} onPress={goNextSlide}>
                                                <Text style={{fontWeight: 'bold', fontSize: 15}}>NEXT</Text>
                                            </TouchableOpacity>
                                        </View>)
                        }
                    </View>
                </View>
    }
    
    const updateCurrentSlideIndex = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    }
    const goNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if(nextSlideIndex != slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current?.scrollToOffset({offset});
            setCurrentSlideIndex(nextSlideIndex);
        }
    }

    const skip = () => {
        const lastSlideIndex = slides.length - 1;
        const offset = lastSlideIndex * width;
        ref?.current?.scrollToOffset({offset});
        setCurrentSlideIndex(lastSlideIndex);

    }
    return <SafeAreaView style={{
        flex: 1,
        backgroundColor: COLORS.primary
    }}>
        
        <StatusBar backgroundColor={COLORS.primary}/>
        <FlatList 
            onMomentumScrollEnd={updateCurrentSlideIndex}
            ref={ref}
            pagingEnabled
            data={slides} 
            contentContainerStyle={{height: height * 0.75}}
            horizontal 
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <Slide item ={item} />}/>
        <Footer />
    </SafeAreaView>
}

const styles = StyleSheet.create({
    title: {
        color: COLORS.white,
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center'
    },
    subtitle: {
        color: COLORS.white,
        fontSize: 13,
        marginTop: 10,
        maxWidth: '70%',
        textAlign: 'center',
        lineHeight: 23
    },
    indicator: {
        height: 2.5,
        width: 10, 
        backgroundColor: 'grey',
        marginHorizontal: 3,
        borderRadius: 2
    },
    btn: {
        flex: 1,
        height: 50,
        borderRadius: 5,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center'
    }
});