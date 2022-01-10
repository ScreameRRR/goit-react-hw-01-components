
import PropTypes from 'prop-types';
import {
  ProfileContainer,
  Description,
  ProfileImg,
  Username,
  ProfileText,
  Stats,
  StatItem,
  Label,
  Quantity,
} from "./Profile.styled";

const Profile = ({
username,
tag,
location,
avatar,
followers,
views,
likes,

}) => {
return (
<ProfileContainer>
  <Description>
    <ProfileImg
      src={avatar}
      alt={tag}
    />
    <Username>{username} </Username>
    <ProfileText >{tag}</ProfileText>
    <ProfileText >{location}</ProfileText>
  </Description>

  <Stats>
    <StatItem>
      <Label >Followers</Label>
      <Quantity >{followers}</Quantity>
    </StatItem>
    <StatItem>
      <Label >Views</Label>
      <Quantity>{views}</Quantity>
    </StatItem>
    <StatItem>
      <Label>Likes</Label>
      <Quantity>{likes}</Quantity>
    </StatItem>
  </Stats>
</ProfileContainer>

)
};

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({


    })),

  };


export default Profile;