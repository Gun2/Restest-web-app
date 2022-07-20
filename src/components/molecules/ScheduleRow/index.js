import React, {useCallback, useState} from 'react';
import styled, {css} from "styled-components";
import CheckBox from "../../atoms/CheckBox";
import Title from "../../atoms/Title";
import DirectionToggle from "../../atoms/DirectionToggle";
import JobContain from "../JobContain";
import ScheduleContain from "../ScheduleContain";
import {Switch} from "@mui/material";
import axios from "axios";
import {MdCheckCircleOutline} from "react-icons/md";
import StatusLabel from "../../atoms/StatusLabel";


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
    ${({theme}) => theme.flex.startCenter};
`

const HiddenRow = styled.div`

`


const initData = {
    title: "",
    delay: "1000",
    jobList: [],
}

const reducer = (state, {type, name, value}) => {
    switch (type) {
        case "INIT":
            return {...initData};
        case "CHANGE":
            return {
                ...state,
                [name]: value
            }
        case "JOBS/CHANGE":
            return {
                ...state,
                jobIdList: [...value]
            }
    }
}

function ScheduleRow({
                         title,
                         data,
                         schedulerStateInfo,
                         onSaveCallback,
                         onDeleteCallback,
                         onCheckCallback,
                         _key
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
                    <Title color={"#e4e4e4"}>
                        {title}
                    </Title>

                </RowHead>
                <RowTail>
                    {
                        schedulerStateInfo &&
                        <>
                            <StatusLabel
                                status={"success"}
                                label={schedulerStateInfo.success}
                            />
                            <StatusLabel
                                status={"failure"}
                                label={schedulerStateInfo.failure}
                            />
                        </>


                    }
                    <Switch
                        checked={schedulerStateInfo}
                        color={"secondary"}
                        onChange={({target}) => {
                            axios.put('/api/v1/schedules/run', {
                                id: _key,
                                run: target.checked
                            }).then(r => {
                                onSaveCallback();
                            }).catch(e => {
                                console.error(e)
                            })
                        }}

                    />
                    <DirectionToggle onToggle={onToggle} degree={90}/>
                </RowTail>
            </Row>
            {
                viewBody && (
                    <HiddenRow>
                        <ScheduleContain
                            data={data}
                            showDeleteBtn
                            showSaveBtn
                            onSaveCallback={() => {
                                //onToggle();
                                onSaveCallback();
                            }}
                            onDeleteCallback={() => {
                                //onToggle();
                                onDeleteCallback();
                            }}

                        />
                    </HiddenRow>
                )
            }

        </Box>
    );
}

export default ScheduleRow;