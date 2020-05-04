import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Animated,
    TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class FloatingButton extends Component {
    animation = new Animated.Value(0);

    toggleMenu = () => {
        const toValue = this.open ? 0 : 1;
        Animated.spring(this.animation,{
            toValue,
            friction:5,
            useNativeDriver: true,
            duration: 10000,
        }).start();
        this.open = !this.open;
    }

    render() {

        const pinStyle = {
            
            transform:[
                {
                    scale:this.animation
                },
                {
                    translateY:this.animation.interpolate({
                        inputRange:[0,1],
                        outputRange:[0,-80]                        
                    })
                }
            ]
        }

        const thumbStyle = {
            transform:[
                {
                    scale:this.animation
                },
                {
                    translateY:this.animation.interpolate({
                        inputRange:[0,1],
                        outputRange:[0,-140]                        
                    })
                }
            ]
        }

        const glassStyle = {
            transform:[
                {
                    scale:this.animation
                },
                {
                    translateY:this.animation.interpolate({
                        inputRange:[0,1],
                        outputRange:[0,-200]                        
                    })
                }
            ]
        }


        const rotation = {
            transform:[
                {
                    rotate:this.animation.interpolate({
                        inputRange:[0,1],
                        outputRange:["0deg","45deg"]
                    })
                }
            ]
        }

        // const opacity = this.animation.interpolate({
        //     inputRange:[0,0.5,1],
        //     outputRange:[0,0,1]
        // })

        return (
            <View style={[styles.container]}>
                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.secondary,glassStyle]}>
                        <Icon name="glass" size={20} color="#F02A4B" />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.secondary,thumbStyle]}>
                        <Icon name="fast-backward" size={20} color="#F02A4B" />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={()=>{console.log("yessss")}}>
                    <Animated.View style={[styles.button, styles.secondary, pinStyle]}>
                        <Icon name="location" size={20} color="#F02A4B" />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this.toggleMenu.bind(this)}>
                    <Animated.View style={[styles.button, styles.menu,rotation]}>
                        <Icon name="plus" size={24} color="#FFF" />
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        position: "absolute",
        bottom: 100,
    },
    button: {
        position: "absolute",
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        alignItems: "center",
        justifyContent: "center",
        shadowRadius: 10,
        shadowColor: "#F02A4B",
        shadowOpacity: 0.3,
        shadowOffset: { height: 10 }
    },
    menu: {
        backgroundColor: "#F02A4B"
    },
    secondary: {
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
        backgroundColor: "#FFF"

    }

});

