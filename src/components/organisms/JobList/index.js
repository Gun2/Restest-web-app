import React, {useEffect, useMemo, useReducer, useState} from 'react';
import styled from "styled-components";
import axios from "axios";
import JobRow from "../../molecules/OpenRow";
import JobContain from "../../molecules/JobContain";

const Box = styled.div`
`
const List = styled.div`
    display: flex;
    flex-direction : column;
    gap:5px;
    padding 10px;
`


function JobList({
                     data,
                     getData,
                     onCheckCallback = () => {
                     },
                     checkedIdList = [],
                     hideCheckBox,
                     readonly
                 },
) {
    const [checkSet, setCheckSet] = useState(new Set([...checkedIdList]));

    return (
        <Box>
            <List>
                {
                    data.map((d, i) => {
                        return (
                            <JobRow
                                hideCheckBox={hideCheckBox}
                                checkSet={checkSet}
                                title={d.title}
                                data={d}
                                onSaveCallback={() => {
                                    getData();
                                }}
                                onDeleteCallback={() => {
                                    getData();
                                }}
                                key={d.id}
                                _key={d.id}
                                onCheckCallback={(e, key) => {
                                    const checked = e.target.checked;
                                    if (checked) {
                                        checkSet.add(key);
                                    } else {
                                        checkSet.delete(key);
                                    }
                                    setCheckSet(checkSet)

                                    onCheckCallback(checkSet);
                                }}
                                readonly={readonly}
                            />
                        )
                    })
                }
            </List>
        </Box>
    );
}


export default JobList;