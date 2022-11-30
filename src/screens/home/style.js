import styled from 'styled-components/native';

export const Styles = {
    Container: styled.View`
        background-color: #052;
        width: 100%;
        height: 100%;
        align-items: center;
        padding: 20px;
    `,

    ViewTitle: styled.View`
        border-width: 2px;
        border-color: #fff;
        border-radius: 10px;
        padding: 5px 55px 5px 55px;
        width: 100%;
        align-items: center;
        justify-content: center;
        text-align: center;
    `,

    Title: styled.Text`
        font-size: 30px;
        color: #fff;
        font-weight: 600;
    `,

    ViewResponse: styled.View`
        border-width: 2px;
        border-color: #fff;
        border-radius: 10px;
        padding: 5px 10px 5px 10px;
        margin-top: 25px;
        width: 100%;
        align-items: center;
        justify-content: center;
        text-align: center;
    `,

    Response: styled.Text`
        font-size: 30px;
        color: #fff;
        font-weight: 600;
        margin: 10px;
    `,

    Button: styled.TouchableOpacity`
        border-width: 2px;
        border-color: #fff;
        border-radius: 10px;
        padding: 10px 10px 10px 10px;
        margin-top: 25px;
        width: 100%;
        align-items: center;
        justify-content: center;
        text-align: center;
    `,

    ButtonLabel: styled.Text`
        font-size: 30px;
        color: #fff;
        font-weight: 800;
    `
}