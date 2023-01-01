import React, {useContext} from 'react';
import Button from '../components/atoms/Button';
import InputText from '../components/atoms/InputText';
import Select from '../components/atoms/Select';
import {SocketContext} from "../App";
import JobRow from "../components/molecules/JobRow";
import JobContent from "../components/molecules/JobContent";
import TabBar from "../components/molecules/TabBar";
import Tab from "../components/atoms/Tab";
import IncreaseTable from "../components/atoms/IncreaseTable";
import axios from "axios";
import JobList from "../components/organisms/JobList";
import ScheduleContent from "../components/molecules/ScheduleContent";
import SchedulePage from "../components/pages/SchedulePage";

function Test(props) {
    console.log(useContext(SocketContext));
    return (
        <div>
            <Button form='primary'>
                primary
            </Button>
            <Button form='primary' disabled>primary</Button>
            <Button form='danger'>danger</Button>
            <Button form='danger' disabled>danger</Button>
            <Button form='warning'>warning</Button>
            <Button form='warning' disabled>warning</Button>
            <Button form='info'>info</Button>
            <Button form='info' disabled>info</Button>
            <Button form='success'>success</Button>
            <Button form='success' disabled>success</Button>
            <Button form='default'>default</Button>
            <Button form='default' disabled>default</Button>



            <SchedulePage/>

        </div>

    );
}

export default Test;