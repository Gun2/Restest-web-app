import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {AreaChart,Area, CartesianGrid, Legend, Line, Tooltip, XAxis, YAxis} from "recharts";
import Title from "../../atoms/Title";


const Box = styled.div`
`;
const RpmLineChart = ({jobList = [], data = []}) => {
    //const [data, setData] = useState(initData);
    return (
        <Box>
            <Title text={"RPM 지수"} color={({theme}) => theme.palette.default}/>
            <AreaChart width={700} height={300} data={data}
                       margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="measureTime" tick={{
                    stroke: "#aaa",
                    strokeWidth : 0.5,
                }}/>
                <YAxis tick={{
                    stroke: "#aaa",
                    strokeWidth : 0.5,
                }}/>
                <Tooltip  contentStyle={{backgroundColor:"#000"}} labelFormatter={(value) => `${value}ms`}/>
                <Legend />
                {
                    jobList.map( job => <Area key={job.id} type="monotone" dataKey={job.id} stroke={job.color} name={job.title} dot={false} opacity={0.5} fill={job.color}/>)
                }
            </AreaChart>
        </Box>
    );
};

export default RpmLineChart;