import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
MenuItem.propTypes = {
    
};

const Box = styled.div`
    background-color : ${({theme}) => theme.palette.panel};
    color : ${({theme}) => theme.palette.text.primary};
    height : 40px;
    ${({theme}) => theme.flex.startCenter};
    padding : 5px;
    gap : 5px;
    font-size : 25px;
    &:hover{
        background-color : ${({theme}) => theme.palette.text.primary};
        color : ${({theme}) => theme.palette.panel};
    }
    cursor : pointer;
`

function MenuItem({children, text, textHide}) {
    return (
        <Box>
            <div>
            {children}
            </div>
            <div>
            {!textHide && text}
            </div>
            
        </Box>
    );
}

export default MenuItem;