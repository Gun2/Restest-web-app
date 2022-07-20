import React, {useCallback, useState, useReducer} from 'react';
import styled, {css} from "styled-components";
import DirectionToggle from "../../atoms/DirectionToggle";
import Title from "../../atoms/Title";
import JobContain from "../JobContain";
import CheckBox from "../../atoms/CheckBox";

const Box = styled.div`
    background-color : ${({theme}) => theme.palette.panel};
    display:flex;
    flex-direction : column;
    padding : 5px;
    gap:5px;
    ${
    ({theme, hasUpdate}) => hasUpdate && css`
        background-color : ${theme.colorAdd(theme.palette.panel, 50)}
    `
}   
`;

const Row = styled.div`
    display: flex;
`

const RowHead = styled.div`
    flex: 1;
    ${({theme}) => theme.flex.startCenter};
`

const RowTail = styled.div`

`

const HiddenRow = styled.div`

`

function JobRow({
                    title,
                    data,
                    onSaveCallback,
                    onDeleteCallback,
                    onCheckCallback,
                    _key,
                    checkSet,
                    hideCheckBox,
                    readonly
                }) {
    const [hasUpdate, setHasUpdate] = useState(false);
    const [viewBody, setViewBody] = useState(false);
    const onToggle = useCallback((flag) => {
        setViewBody(flag != 1);
    }, [viewBody]);

    return (
        <Box hasUpdate={hasUpdate}>
            <Row>
                <RowHead>
                    {
                        !hideCheckBox &&
                        <CheckBox
                            onChange={(e) => {
                                onCheckCallback(e, _key);
                            }}
                            checked={checkSet.has(_key)}

                        />
                    }
                    {
                        <Title color={"#e4e4e4"}>
                            {title}
                        </Title>
                    }

                </RowHead>
                <RowTail>
                    <DirectionToggle onToggle={onToggle} degree={90}/>
                </RowTail>
            </Row>
            {
                viewBody && (
                    <HiddenRow>
                        <JobContain
                            data={data}
                            showDeleteBtn
                            showSaveBtn
                            onSaveCallback={() => {
                                onToggle();
                                onSaveCallback();
                            }}
                            onDeleteCallback={() => {
                                onToggle();
                                onDeleteCallback();
                            }}
                            readonly={readonly}
                        />
                    </HiddenRow>
                )
            }

        </Box>
    );
}

export default JobRow;