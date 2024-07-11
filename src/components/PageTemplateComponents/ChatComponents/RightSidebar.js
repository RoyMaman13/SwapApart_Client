import * as React from 'react';
import { Sidebar, ExpansionPanel } from "@chatscope/chat-ui-kit-react";
import PublicIcon from '@mui/icons-material/Public';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MapIcon from '@mui/icons-material/Map';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BathtubIcon from '@mui/icons-material/Bathtub';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ApartmentImageStepper from '../HomePageComponents/ApartmentImageStepper';

export default function RightSidebar({ conversation }) {
  const getDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  const getInfo = (label, data) => `${label}: ${data}`;

  const dataItems = [
    { icon: <ArrowForwardIcon />, text: getInfo("Start Date", getDate(conversation.plan.startDate)) },
    { icon: <ArrowBackIcon />, text: getInfo("End Date", getDate(conversation.plan.endDate)) },
    { icon: <PublicIcon />, text: getInfo("Country", conversation.matchedUser.apartment.country) },
    { icon: <MapIcon />, text: getInfo("Region", conversation.matchedUser.apartment.region) },
    { icon: <LocationOnIcon />, text: getInfo("City", conversation.matchedUser.apartment.city) },
    { icon: <HomeWorkIcon />, text: getInfo("Rooms", conversation.matchedUser.apartment.rooms) },
    { icon: <BathtubIcon />, text: getInfo("Bathrooms", conversation.matchedUser.apartment.bathrooms) }
  ];

  return (
    <Sidebar position="right">
      <ExpansionPanel open title="Match Info">
        <List>
          {dataItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ApartmentImageStepper images={conversation.matchedUser.apartment.pictures} />
          </ListItem>
        </List>
      </ExpansionPanel>
    </Sidebar>
  );
}
