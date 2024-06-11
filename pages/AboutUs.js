import React from 'react';
import { Button, StyleSheet, View, Text, ImageBackground } from 'react-native';

import styles from '../styles';

function AboutUs({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Detta är om oss sidan</Text>
          
        <View style={styles.button}> 
            <Button color="#635766" title="Hem" onPress={() => navigation.navigate('Hem')} /><br/>
            <Button color="#635766" title="Filmer" onPress={() => navigation.navigate('Filmer')} /> 
        </View>

        <View style={styles.containerAbout}>

            <View style={styles.row1}>
            <ImageBackground style={styles.moonImg} source={require('../assets/movietape.jpg')} />
            </View>

            <View style={styles.row2}>
                <Text style={styles.textAboutUs}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed fringilla velit. Fusce nisi tortor, venenatis quis vehicula non, cursus ac tellus. Cras sagittis ex sed auctor ullamcorper. Sed sagittis magna id dui pulvinar accumsan. Pellentesque lobortis odio non placerat gravida. Vestibulum nec purus fermentum nisl tempor pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus a nulla in turpis elementum dictum. Morbi placerat a nunc quis iaculis.
                      Vestibulum fringilla, felis at pulvinar luctus, arcu quam viverra tortor, sit amet viverra massa magna non sapien. Aenean in ultrices orci, eget bibendum sapien. Morbi porttitor efficitur purus ac rhoncus. Curabitur at risus tellus. Nulla sagittis placerat facilisis. Proin quis lorem pellentesque, dapibus justo at, laoreet enim. Integer a ultrices turpis. Suspendisse sollicitudin nibh eget leo ultricies iaculis. Aenean aliquam, enim nec posuere venenatis, magna felis porta libero, ultrices interdum justo massa vitae libero. 
                      Praesent aliquam sapien quis turpis vestibulum, quis sodales nibh molestie. Sed eu diam ipsum. Cras congue tempor porta. Nullam pellentesque purus ac feugiat imperdiet. Nulla venenatis cursus magna, quis suscipit urna varius at. Phasellus ac malesuada magna, eget rhoncus quam.
                </Text>
            </View>

            <View style={styles.row3}>
            <ImageBackground style={styles.projectorImg} source={require('../assets/projector.jpg')} />
            </View>

            <View style={styles.row4}>
                <Text style={styles.textAboutUs}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed fringilla velit. Fusce nisi tortor, venenatis quis vehicula non, cursus ac tellus. Cras sagittis ex sed auctor ullamcorper. Sed sagittis magna id dui pulvinar accumsan. Pellentesque lobortis odio non placerat gravida. Vestibulum nec purus fermentum nisl tempor pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus a nulla in turpis elementum dictum. Morbi placerat a nunc quis iaculis.
                      Vestibulum fringilla, felis at pulvinar luctus, arcu quam viverra tortor, sit amet viverra massa magna non sapien. Aenean in ultrices orci, eget bibendum sapien. Morbi porttitor efficitur purus ac rhoncus. Curabitur at risus tellus. Nulla sagittis placerat facilisis. Proin quis lorem pellentesque, dapibus justo at, laoreet enim. Integer a ultrices turpis. Suspendisse sollicitudin nibh eget leo ultricies iaculis. Aenean aliquam, enim nec posuere venenatis, magna felis porta libero, ultrices interdum justo massa vitae libero. Praesent aliquam sapien quis turpis vestibulum, quis sodales nibh molestie. Sed eu diam ipsum. Cras congue tempor porta. Nullam pellentesque purus ac feugiat imperdiet. Nulla venenatis cursus magna, quis suscipit urna varius at. Phasellus ac malesuada magna, eget rhoncus quam.
                      Ut facilisis sapien semper est auctor, at volutpat quam aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lorem at leo posuere placerat. Suspendisse egestas mi at ante tristique vehicula. Aliquam semper erat justo, quis fringilla eros fringilla eget. Fusce bibendum, ex sit amet ullamcorper tincidunt, risus mi gravida mauris, at sagittis magna leo eget ipsum. Cras sit amet vestibulum massa. In pretium est ac sem maximus aliquet. Pellentesque turpis orci, rutrum vitae nunc sit amet, imperdiet euismod orci.
                </Text>
            </View>
            
        </View>

        <View style={styles.footerContainerAbout}>
            <Text style={styles.footerText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed fringilla velit. Fusce nisi tortor, venenatis quis vehicula non, cursus ac tellus. Cras sagittis ex sed auctor ullamcorper. Sed sagittis magna id dui pulvinar accumsan.</Text>
        </View>

        </View>
    );
}


export default AboutUs;