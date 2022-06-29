import React from 'react';
import styled from 'styled-components';

const Box = styled.div`

`

const Text = styled.text`
    font-size : ${({fontSize}) => fontSize || "20px"};
    font-weight : bold;
    color : ${({theme}) => theme.palette.background};
`;


function Title({text, fontSize}) {
    return (
        <Box>
            <Text fontSize={fontSize}>
                {text}
            </Text>
        </Box>
    );
}

export default Title;