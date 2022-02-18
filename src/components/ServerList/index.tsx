import { ServerButton } from "../ServerButton";
import { Container, Separator } from "./styles";

export const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome/>

      <Separator />
      
      <ServerButton/>
      <ServerButton hasNotifications/>
      <ServerButton mentions={3}/>
      <ServerButton/>
      <ServerButton/>
      <ServerButton/>
      <ServerButton hasNotifications/>
      <ServerButton/>
      <ServerButton/>
      <ServerButton mentions={72}/>
      <ServerButton/>

    </Container>
  );
}