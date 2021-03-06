import { ChannelButton } from "../ChannelButton";
import { Container, Category, AddCategoryIcon  } from "./styles";

export const ChannelList: React.FC = () => {
  return(
    <Container>
      <Category>
        <span>Canais de Texto</span>
        <AddCategoryIcon></AddCategoryIcon>
      </Category>

      <ChannelButton channelName="chat-livre"/>
      <ChannelButton channelName="trabalho"/>
      <ChannelButton channelName="lolzinho"/>
      <ChannelButton channelName="valorant"/>
      <ChannelButton channelName="csgo"/>
    </Container>
  );
}