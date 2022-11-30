import React, { useEffect } from 'react';
import { Styles } from './style';

const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => { navigation.navigate('Home') }, 2500)
    }, [])

    return (
        <Styles.Container>
            <Styles.Label testID={'title'}>
                Free insult
            </Styles.Label>
        </Styles.Container>
    );
}

export default Splash;