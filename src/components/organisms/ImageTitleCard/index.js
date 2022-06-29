import React from 'react';
import styled from 'styled-components';
import ImageTitle from '../../molecules/ImageTitle';


const Box = styled.div`
    border-radius : 5px;
    width : 500px;
    height : 200px;
    background-color: ${({theme, bgColor}) => bgColor || theme.palette.panel};
`;

function ImageTitleCard({image, text, bgColor}) {
    return (
        <Box bgColor={bgColor}>
            <ImageTitle image={image} text={text}/>
        </Box>
    );
}




export default ImageTitleCard;