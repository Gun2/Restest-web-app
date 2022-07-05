import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    display:flex;
    height:100vh;
`;
const Menu = styled.div``;
const Content = styled.div`
    flex: 1;
`;
function LayoutTemplate({menu, content}) {
    return (
        <Box>
            <Menu>
                {menu}
            </Menu>
            <Content>
                {content}
            </Content>
        </Box>
    );
}

export default LayoutTemplate;