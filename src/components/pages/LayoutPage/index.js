import React from 'react';
import LayoutTemplate from '../../templates/LayoutTemplate';
import MenuBar from '../../organisms/MenuBar';
import DashBoardPage from '../DashBoardPage';
import styled from 'styled-components';
import {Route, Routes} from 'react-router-dom';
import Test from '../../../Test';
import JobTemplate from "../../templates/JobTemplate";
import JobPage from "../JobPage";
import SchedulePage from "../SchedulePage";

const Box = styled.div`
`;
function LayoutPage(props) {

    return (
        <Box>
            <LayoutTemplate 
            menu={<MenuBar/>} 
            content={
                <Routes>
                    {['/dashboard', '/'].map( path => (
                        <Route path={path} element={<DashBoardPage/>} />
                    ))}
                    <Route path='/job' element={<JobPage/>} />
                    <Route path='/scheduler' element={<SchedulePage />} />
                    <Route path='/test' element={<Test />} />
                </Routes>
            }/>
        </Box>

    );
}

export default LayoutPage;