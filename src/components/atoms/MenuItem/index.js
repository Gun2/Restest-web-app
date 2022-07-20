import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

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
const navLinkStyle = ({isActive, theme}) => ({
    textDecoration: 'none',
    backgroundColor: isActive ? '#fff' : undefined,
})


function MenuItem({children, text, textHide, to, theme}) {
    return (
        <NavLink style={navLinkStyle} theme={theme} to={to}>
            <Box>
                <div>
                {children}
                </div>
                <div>
                {!textHide && text}
                </div>
            </Box>

        </NavLink>
    );
}

export default MenuItem;