import React from 'react';
import { Styles } from './style';

const Splash = () => {
    return (
        <Styles.Container>
            <Styles.Label testID={'title'}>
                Teste com jest usando o github Actions
            </Styles.Label>
        </Styles.Container>
    );
}

export default Splash;