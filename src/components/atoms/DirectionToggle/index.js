import React, { useCallback, useReducer } from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import styled from 'styled-components';

const Box = styled.div`
    ${({theme}) => theme.flex.center};
    padding : 5px;
`;

const Button = styled.div`
    color : ${({theme}) => theme.palette.text.primary};
    ${({theme}) => theme.flex.center};
    cursor : pointer;
    &:hover{
        color : ${({theme}) => theme.palette.text.default};
    };
`;

function increaseCount(state){
    return state + 1
}

function DirectionToggle({degree = 0, onToggle}) {
    //console.log(Box);
    const [count, increaseDispatch] = useReducer(increaseCount, 2)
    const onClick = useCallback(() => {
        increaseDispatch();
        onToggle(count % 2);
    })
    return (
        <Box style={{
            transform : `rotate(${((count % 2) * 180) + degree}deg
            )`,
        }}>
            <Button onClick={onClick}>
                <MdOutlineArrowForwardIos size={30}/>
            </Button>
        </Box>
    );
}

export default DirectionToggle;