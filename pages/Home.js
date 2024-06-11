import React from 'react';
import { Button, StyleSheet, View, Text, Image, Linking } from 'react-native';

import styles from '../styles';
import Movies from './Movies';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Välkommen till filmsidan</Text>
        
        <View style={styles.button}>
            <Button color="#635766" title="Se filmer" onPress={() => navigation.navigate('Filmer')} /><br/>
            <Button color="#635766" title="Mer om oss" onPress={() => navigation.navigate('Om oss')} />
        </View>

        <Image style={styles.cinemaImg} source={require('../assets/cinema.jpg')} />
        <View style={styles.cinemaButton}> 
        <Button color="#635766" title="Läs mer om våra toppfilmer" onPress={() => navigation.navigate('Filmer')} />
        </View>
        
        <Image style={styles.setActionImg} source={require('../assets/setAction.jpg')} />
        <View style={styles.setActionButton}>
        <Button color="#635766" title="Vill du veta mer om oss?" onPress={() => navigation.navigate('Om oss')} />
        </View>

        <View style={styles.footerContainerHome}>
            <Text style={styles.footerText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed fringilla velit. Fusce nisi tortor, venenatis quis vehicula non, cursus ac tellus. Cras sagittis ex sed auctor ullamcorper. Sed sagittis magna id dui pulvinar accumsan.</Text>
        </View>
        
        </View>
    );
}




