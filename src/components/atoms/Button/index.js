import React from 'react';
import style, {css} from 'styled-components';

const Button = style.button`
    width : 100px;
    height : 30px;
    color : #ffffff;
    border: none;
    border-radius : 5px;
    border-width : 0px;
    ${({theme, form}) => theme.map.button(form)};
    cursor:pointer;
    s
`;

export default Button;