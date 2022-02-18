import { Grid } from "./styles";
import React from "react"
import { ServerList } from "../ServerList";
import { ServerName } from "../ServerName";
import { ChannelInfo } from "../ChannelInfo";
import { ChannelList } from "../ChannelList";
import { UserInfo } from "../UserInfo";
import ChannelData from '../ChannelData';
import UserList from '../UserList';

export const Layout: React.FC = () => {
  return(
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
      <UserInfo />
      <ChannelData />
      <UserList />
    </Grid>
  );
}