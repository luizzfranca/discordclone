import { Container, HashtagIcon, Title, Separator, Description } from "./styles";

export const ChannelInfo: React.FC = () => {
  return(
    <Container>
      <HashtagIcon />

      <Title>chat-livre</Title>

      <Separator />

      <Description>Canal aberto para conversas</Description>
    </Container>
  );
}