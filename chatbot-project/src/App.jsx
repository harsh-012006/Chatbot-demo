import { useState } from 'react' 
import { ChatInput } from './components/ChatInput';
import './App.css'
import { ChatMessages } from './components/ChatMessages';
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