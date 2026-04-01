import { useState } from 'react' 
import {Chatbot} from 'supersimpledev';
import RobotProfileImage from './assets/robot.png'
import UserProfileImage from './assets/user.png'
import './App.css'
     function ChatInput({chatMessages,setChatMessages}) {
            const [inputText,setInputText]=useState('')
            function saveInputText(event){
                setInputText(event.target.value);
                
            }
            function sendMessage(){
            const newChatMessages=[...chatMessages,{message:inputText,sender:'user'}];
            // setChatMessages(newChatMessages);
            const response= Chatbot.getResponse(inputText);
            setChatMessages([...newChatMessages,{message:response,sender:'robot'}]);
            setInputText('');
        }
            return (
                <>              {/*fragments*/}
                    <input
                        size="30"
                        placeholder="Send a message to Chatbot" 
                        onChange={saveInputText}
                        value={inputText}/>
                    <button onClick={sendMessage}>Send</button>
                </>
            )
        }   
        //function ChatMessage({message,sender})
        function ChatMessage(props) {
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
        function ChatMessages({chatMessages}) {
            return (
                <>
                    {chatMessages.map((chat, index) => {
                        return (
                            <ChatMessage key={index} message={chat.message} sender={chat.sender} />
                        );
                    })}
                </>
            );
        }

function App() {
            const [chatMessages,setChatMessages] = useState(
                [{
                    message: 'hello chatbot',
                    sender: 'user'
                }, {
                    message: 'Hello! How can I help you?',
                    sender: 'robot'
                }, {
                    message: "can you get me today's date",
                    sender: 'user'
                }, {
                    message: 'Today is March 31',
                    sender: 'robot'
                }
                ]);
            // const chatMessages=array[0]; 
            // const setChatMessages=array[1];
           // const [chatMessages,setChatMessages]=array;
            return (
                <>
                    <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages}/>
                    <ChatMessages chatMessages={chatMessages} setChatMessages={setChatMessages} />

                </>
            );

        };

export default App;