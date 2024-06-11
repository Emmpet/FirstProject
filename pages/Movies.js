import React, { useState } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';

import styles from '../styles';

function Movies({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    if (isLoading == true){
    fetch('http://localhost:3000/movies')
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson);
        setLoading(false);
        setMovies(responseJson);
    })
    .catch((error) => {
        console.error(error);
    });
}
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Detta är filmsidan</Text>    

        <View style={styles.button}>
            <Button color="#635766" title="Hem" onPress={() => navigation.navigate('Hem')} /><br/>
            <Button color="#635766" title="Mer om oss" onPress={() => navigation.navigate('Om oss')} />
        </View>
        
        
            {isLoading == true && <h2>Loading...</h2>}
            {movies.map((movies, index) => (
                <Text style={styles.movieText} key={index}>
                    <Text style={styles.movieTitle}>{movies.name}</Text><br/>
                    <Text style={styles.movieStars}>{movies.stars}</Text><br/>
                    <Text style={styles.movieDirector}>{movies.director}</Text><br/>
                    <Text style={styles.movieRating}>{movies.rating}</Text>
                </Text>
            ))}  

        <View style={styles.footerContainerMovies}>
            <Text style={styles.footerText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed fringilla velit. Fusce nisi tortor, venenatis quis vehicula non, cursus ac tellus. Cras sagittis ex sed auctor ullamcorper. Sed sagittis magna id dui pulvinar accumsan.</Text>
        </View>    

        </View>
    );
}

export default Movies;