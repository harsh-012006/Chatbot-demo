import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'
export function ChatMessage(props) {
            // const message= props.message;
            const { message, sender } = props;
            /*    if(props.sender==='robot'){
                    return(
                     <div>
                        <img src="robot.png" width="40" />
                        {message}
                    </div>         
                )
                } */
            return (
                <div>
                    {sender === 'robot' && <img src={RobotProfileImage} width="40" />} {/*Guard operator*/}
                    {message}
                    {sender === 'user' && <img src={UserProfileImage} width="40" />}
                </div>
            )
        }