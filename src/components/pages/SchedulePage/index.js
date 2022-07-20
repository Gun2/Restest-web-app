import React, {useEffect, useState} from 'react';
import ScheduleTemplate from "../../templates/ScheduleTemplate";
import axios from "axios";
import ScheduleTop from "../../organisms/ScheduleTop";
import ScheduleList from "../../organisms/ScheduleList";

const getScheduleList = () => {
    return axios.get('/api/v1/schedules');
}

function SchedulePage(props) {
    const [data, setData] = useState([]);
    const getData = () => {
        getScheduleList().then(r => {
            var response = r.data;
            setData(response.data);
        });
    }
    useEffect(() => {
        getData();
    }, []);
    const onSaveCallback = () => {
        getData();
    }

    return (
        <ScheduleTemplate
            top={
                <ScheduleTop
                    onSaveCallback={onSaveCallback}
                />
            }
            list={
                <ScheduleList
                    data={data}
                    getData={getData}
                />
            }

        />
    );
}

export default SchedulePage;