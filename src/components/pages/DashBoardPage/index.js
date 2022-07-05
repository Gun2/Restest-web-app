import React from 'react';
import { MdCheckCircle, MdError, MdGroup } from 'react-icons/md';
import styled, {css} from 'styled-components';
import ImageTitleCard from '../../organisms/ImageTitleCard';
import DashBoardTeemplate from '../../templates/DashBoardTemplate';

const Box = styled.div`

`;
function DashBoardPage({theme}) {
    return (
        <Box>
            <DashBoardTeemplate
                topLeft={<ImageTitleCard 
                    text={1000}
                    bgColor={css`${({theme})=>theme.palette.status.default}`}
                    image={<MdGroup 
                        size={100}
                        />}
                />}
                topCenter={<ImageTitleCard 
                    text={1000}
                    bgColor={css`${({theme})=>theme.palette.status.success}`}
                    image={<MdCheckCircle 
                        size={100}
                    />}
                />}
                topRight={<ImageTitleCard 
                    text={1000}
                    bgColor={css`${({theme})=>theme.palette.status.failure}`}
                    image={<MdError 
                        size={100}
                        />}
                />}
            />
        </Box>
    );
}

export default DashBoardPage;