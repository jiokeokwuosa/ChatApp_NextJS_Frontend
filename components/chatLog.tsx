import { FC } from 'react'
import ChatBox from './chatBox';
import { IChat } from '../types';

type Props = {
  chats:IChat[],
  authorId:string
}

const ChatLog: FC<Props> = ({chats, authorId}) => {
  const listChats = () => {
    if (chats && chats.length>0) {
      return chats.map((item: IChat, index) => {
        return <ChatBox key={index} chat={item} authorId={authorId}/>
      })
    }
  }
  return (
    <div className="flex-grow overflow-y-auto bg-[url('/img/bg.jpg')] py-1 px-2">
     {listChats()}
    </div>
  )
}

export default ChatLog