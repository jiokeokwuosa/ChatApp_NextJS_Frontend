import { FC } from 'react'
import Image from 'next/image';
import Me from '../public/img/profile.jpg';
import ThirdParty from '../public/img/profile2.jpg';
import { IChat } from '../types';

type Props = {
  chat: IChat,
  authorId: string
}

const ChatBox: FC<Props> = ({ chat, authorId }) => {
  return (
    <div className={`chatBox flex mb-2 ${chat.authorId != authorId ? 'flex-row' : 'flex-row-reverse'} `}>
      <Image alt='male' src={chat.authorId != authorId ? Me : ThirdParty} width={35} height={30} className={`rounded-full w-[9%] ${chat.authorId != authorId ? 'mr-1' : 'ml-1'}`} />
      <span className="rounded-xl bg-white rounded-tl-sm px-2 py-2"><small>{chat.author.name}</small><br />{chat.content}</span>
    </div>
  )
}

export default ChatBox