import React from 'react';
import { MdHistory, MdOutlineLocalFireDepartment, MdOutlineMonitor, MdWork } from 'react-icons/md';
import styled from 'styled-components';
import MenuItem from '../../atoms/MenuItem';

const Box = styled.div` 
    
`;

function MenuList({textHide}) {
    return (
        <Box>
            <MenuItem text={"대시보드"} textHide={textHide}>
                <MdOutlineMonitor />
            </MenuItem>
            <MenuItem text={"업무 관리"} textHide={textHide}>
                <MdWork />
            </MenuItem>
            <MenuItem text={"스케줄러"} textHide={textHide}>
                <MdHistory />
            </MenuItem>
            <MenuItem text={"실시간 측정"} textHide={textHide}>
                <MdOutlineLocalFireDepartment />
            </MenuItem>
        </Box>
    );
}

export default MenuList;