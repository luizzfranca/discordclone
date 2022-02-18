import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingsIcon  } from "./styles";

export const UserInfo: React.FC = () => {
  return(
    <Container>
      <Profile>
        <Avatar />

        <UserData>
          <strong>Patrick França</strong>
          <span>#2689</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
}