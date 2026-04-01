import { useRef } from "react";
import { ChatMessage } from "./ChatMessage";
import { useEffect } from "react";

 export function ChatMessages({chatMessages}) {
    const chatMessageRef= useRef(null);
    useEffect(()=>{
        const containerElem= chatMessageRef.current;
        if(containerElem){
            containerElem.scrollTop= containerElem.scrollHeight;
        }
    },[chatMessages])
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