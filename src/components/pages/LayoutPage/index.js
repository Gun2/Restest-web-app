import React from 'react';
import LayoutTemplate from '../../templates/LayoutTemplate';
import MenuBar from '../../organisms/MenuBar';
import DashBoardPage from '../DashBoardPage';
import styled from 'styled-components';
import {Route, Routes, Switch} from 'react-router-dom';

const Box = styled.div`
`;
function LayoutPage(props) {

    return (
        <Box>
            <LayoutTemplate 
            menu={<MenuBar/>} 
            content={
                <Routes>
                    <Route path='/dashboard' element={<DashBoardPage/>} />
                    <Route path='/job' element={<p>222222</p>} />
                    <Route path='/schedule' element={<p>333333</p>} />
                </Routes>
            }/>
        </Box>

    );
}

export default LayoutPage;