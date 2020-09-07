import styled from 'styled-components';

export const CustomForm = styled.form`
display: flex;
flex-direction: column;

input, textarea {
    margin-bottom: 15px;
}

button {
    width: 100px;
    cursor: pointer;
}

p {
    color: red;
    margin: 0;
    margin-top: -10px;
    margin-bottom: 10px;
}
`