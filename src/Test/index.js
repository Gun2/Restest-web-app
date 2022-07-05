import React from 'react';
import Button from '../components/atoms/Button';
import MenuItem from '../components/atoms/MenuItem';
import {MdAccessibilityNew} from 'react-icons/md';
import MenuList from '../components/molecules/MenuList';
import MenuTop from '../components/molecules/MenuTop';
import MenuBar from '../components/organisms/MenuBar';
import LayoutPage from '../components/pages/LayoutPage';
import Title from '../components/atoms/Title';
import ImageTitle from '../components/molecules/ImageTitle';
import ImageTitleCard from '../components/organisms/ImageTitleCard';
import DashBoardPage from '../components/pages/DashBoardPage';

function Test(props) {
    return (
        <div>
            <Button form='primary'>
      primary
      </Button>
      <Button form='primary' disabled>primary</Button>
      <Button form='danger' >danger</Button>
      <Button form='danger' disabled>danger</Button>
      <Button form='warning' >warning</Button>
      <Button form='warning' disabled>warning</Button>
      <Button form='info' >info</Button>
      <Button form='info' disabled>info</Button>
      <Button form='success' >success</Button>
      <Button form='success' disabled>success</Button>
      <Button form='default' >default</Button>
      <Button form='default' disabled>default</Button>

       <LayoutPage />
        </div>
    );
}

export default Test;