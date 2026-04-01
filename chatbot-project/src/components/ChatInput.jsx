import { useState } from "react";
import { Chatbot } from "supersimpledev";

export function ChatInput({chatMessages,setChatMessages}) {
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
        //function