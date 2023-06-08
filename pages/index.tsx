import { FC, useEffect, useState } from "react"
import ChatLog from "../components/chatLog"
import SendMessageBox from "../components/sendMessageBox"
import EntryBox from "../components/EntryBox"
import { io } from "socket.io-client"
import { IChat, ITyping, IUser } from "../types"

const socketUniversal = io(`${process.env.NEXT_PUBLIC_SOCKET_URL}`);

const Home: FC = () => {

  const [chats, setChats] = useState<Array<IChat>>([{ author: { name: '', clientId: '' }, content: '', authorId: '' }])
  const [joined, setJoined] = useState(false)
  const [userInfo, setUserInfo] = useState<IUser>({ clientId: '', id: '', name: '' })
  const [isCurrentlyTyping, setIsCurrentlyTyping] = useState<ITyping>({ name: '', isTyping: false})
    
  useEffect(
    () => {
      const socket = io(`${process.env.NEXT_PUBLIC_SOCKET_URL}`);
      socket.emit('findAllMessages', {}, (res: IChat[]) => {
        setChats(res)
      })

      socket.on('message', (res: IChat) => {
        setChats([...chats, res])
      })

      return () => {
        socket.disconnect();
      }
    },
    [chats]
  )
 
  const sendMessage = async (content: string) => {
    if (content) {     
      socketUniversal.emit('createMessage', { content, authorId: userInfo.id }, (res: any) => {
      })
    }
  }

  const join = async (name: string) => {
    if (name) {
      socketUniversal.emit('join', { name }, (res: IUser) => {
        setUserInfo(res)
        setJoined(true)
      })
    }
  }

  const typing = async (isTyping: boolean) => {
    socketUniversal.emit('typing', { isTyping, authorId:userInfo.id }, (res:ITyping) => {
      setIsCurrentlyTyping(res)
    })
  }

  return (
    <main className="container h-screen m-auto">
      <div className={`w-[380px] ${joined ? 'bg-white' : ''} h-full flex flex-col mx-auto`}>
        {joined ?
          <>
            <ChatLog chats={chats} authorId={userInfo.id} />
            <SendMessageBox sendMessage={sendMessage} />
          </> : <EntryBox join={join} />
        }
      </div>
    </main>
  )
}

export default Home
