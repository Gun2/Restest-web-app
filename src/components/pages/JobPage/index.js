import React, {useRef, useState, useEffect} from 'react';
import JobTemplate from "../../templates/JobTemplate";
import JobTop from "../../organisms/JobTop";
import JobList from "../../organisms/JobList";
import axios from "axios";

const getJobList = () => {
    return axios.get('/api/v1/jobs');
}

function JobPage(props) {
    const [data, setData] = useState([]);
    const getData = () => {
        getJobList().then(r => {
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
        <JobTemplate
            top={
                <JobTop
                    onSaveCallback={onSaveCallback}
                />
            }
            list={
                <JobList
                    data={data}
                    getData={getData}
                    hideCheckBox
                />
            }
        />
    );
}

export default JobPage;