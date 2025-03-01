/* eslint-disable eol-last */
import React from 'react';
import { ActivityIndicator, View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const mainImg = require('./images/Logo.png'); // Ensure this path is correct

const LoadingScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Centered Image */}
            <View style={styles.imageContainer}>
                <Image source={mainImg} style={styles.image} />
                <ActivityIndicator size="large" color="blue" />
            </View>

            {/* Next Button at the Bottom */}
            <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Number')}>
                <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between', // Pushes content apart
        alignItems: 'center',
        padding: 20,
    },
    imageContainer: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 500,
        height: 500,
        marginBottom: 20,
    },
    nextButton: {
        width: '90%',
        backgroundColor: 'green',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20, // Keeps it at the bottom
    },
    nextButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default LoadingScreen;