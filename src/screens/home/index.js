import React, { useEffect } from 'react';
import api from '../../api';
import { Styles } from './style';

const Home = () => {

    useEffect(() => {
        readApi()
    }, [])

    function readApi() {
        api.get('insult').then((res) => {
            console.log('resposta: ', res.data)
        }).catch((e) => {
            console.log('err 01', e)
        })
    }

    return (
        <Styles.Container>
            <Styles.ViewTitle>
                <Styles.Title>
                    Free Insults
                </Styles.Title>
            </Styles.ViewTitle>

        </Styles.Container>
    );
}

export default Home;