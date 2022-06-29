import React from 'react';
import LayoutTemplate from '../../templates/LayoutTemplate';
import MenuBar from '../../organisms/MenuBar';
import DashBoardPage from '../DashBoardPage';
import styled from 'styled-components';

const Box = styled.div`
`;
function LayoutPage(props) {

    return (
        <Box>

            <LayoutTemplate 
            menu={<MenuBar/>} 
            content={<DashBoardPage />
            }/>
        </Box>

    );
}

export default LayoutPage;