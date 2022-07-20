import React, {useCallback, useState} from 'react';
import styled from "styled-components";

const Box = styled.div`
    background-color : ${({theme}) => theme.palette.primary};
`;

const Table = styled.table`
    width:100%;
`

const Tr = styled.tr`
    height: 20px;
`

const Td = styled.td`
    background-color : ${({theme}) => theme.palette.text.default};
`

const Th = styled.th`

`

const TdInput = styled.input`
    width : 95%;
    ${({theme, readonly}) => readonly && theme.style.readonly}
`
const TdTextArea = styled.textarea`
    width : 95%;
    ${({theme, readonly}) => readonly && theme.style.readonly}
`

const TdCheckBox = styled.input`
    ${({theme, readonly}) => readonly && theme.style.readonly}
`

function trIncreaseCheck(data, cols) {
    if (data.length == 0) return true;
    var lastData = data[data.length - 1];
    var trIncrease = cols.map(col => col.key).some(key => lastData[key]);
    return trIncrease;

}

function IncreaseTable({
                           cols = [],
                           data = [],
                           onChange,
                           readonly
                       }) {

    if (trIncreaseCheck(data, cols)) {
        onChange([
            ...data,
            cols.reduce((pre, col) => {
                pre[col.key] = "";
                return pre;
            }, {})
        ]);
    }

    const onInputChange = useCallback(({target}, index) => {
        var {name, value} = target;
        var keys = cols.map(({key}) => key);
        onChange(data.map((d, i) =>
            i == index ? {
                ...d,
                [name]: value
            } : d
        ).filter(d => keys.some(key => d[key])));
    }, [cols, data]);

    const onCheckChange = useCallback(({target}, index) => {
        var {name, checked} = target;
        var keys = cols.map(({key}) => key);
        onChange(data.map((d, i) =>
            i == index ? {
                ...d,
                [name]: checked
            } : d
        ).filter(d => keys.some(key => d[key])));
    }, [cols, data]);

    return (
        <Box>
            <Table>
                <tbody>
                <Tr>
                    {cols.map(({name}) => (
                        <Th>{name}</Th>
                    ))}
                </Tr>
                {data.map((d, i) => (
                    <Tr>
                        {cols.map(({type, key}) => (
                            <Td>
                                {(() => {
                                    switch (type) {
                                        case "input":
                                            return (
                                                <TdInput
                                                    name={key}
                                                    value={d[key]}
                                                    onChange={(e) => onInputChange(e, i)}
                                                    readonly={readonly}
                                                />
                                            )
                                        case "textarea" :
                                            return (
                                                <TdTextArea
                                                    name={key}
                                                    value={d[key]}
                                                    onChange={(e) => onInputChange(e, i)}
                                                    readonly={readonly}
                                                />
                                            )
                                        case "checkbox" :
                                            return (
                                                <TdCheckBox
                                                    type={"checkbox"}
                                                    name={key}
                                                    checked={d[key]}
                                                    onChange={(e) => onCheckChange(e, i)}
                                                    readonly={readonly}
                                                />
                                            )
                                    }
                                })()
                                }
                            </Td>
                        ))}
                    </Tr>
                ))}
                </tbody>
            </Table>
        </Box>
    );
}

export default IncreaseTable;