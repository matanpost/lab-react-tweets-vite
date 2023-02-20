import ProfileImage from './ProfileImage'
import Action from './Actions'
import User from './User'
import Message from './Message'
import Timestamp from './Timestamp'

function Tweet({tweet}) {

  return (
    <div className="tweet">
      
      <ProfileImage image={tweet.user.image} />

      <div className="body">
        <div className="top">
          <User name={tweet.user.name} handle={tweet.user.handle}  />
          

          <Timestamp timestamp={tweet.timestamp}/>
        </div>

        <Message message={tweet.message}/>

        <Action />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
