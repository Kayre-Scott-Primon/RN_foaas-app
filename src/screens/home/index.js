import React, { useEffect, useState } from 'react';
import api from '../../api';
import { Styles } from './style';

const Home = () => {

    useEffect(() => {
        readApi()
    }, [])

    const [response, setResponse] = useState('')
    const [responseAdj, setResponseAdj] = useState('')

    function readApi() {
        api.get('insult').then((res) => {
            console.log('resposta: ', res.data)
            setResponse(res.data)
        }).catch((e) => {
            console.log('err 01', e)
        })
        api.get('adjective').then((res) => {
            console.log('resposta: ', res.data)
            setResponseAdj(res.data)
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

            <Styles.ViewResponse>
                <Styles.Response>
                    {response}
                </Styles.Response>
            </Styles.ViewResponse>


            <Styles.ViewResponse>
                <Styles.Response>
                    Adjective: {responseAdj}
                </Styles.Response>
            </Styles.ViewResponse>

            <Styles.Button onPress={readApi}>
                <Styles.ButtonLabel>
                    Refresh
                </Styles.ButtonLabel>
            </Styles.Button>

        </Styles.Container>
    );
}

export default Home;