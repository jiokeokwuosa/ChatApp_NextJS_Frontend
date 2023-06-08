import { FC, useState } from 'react'

type Props = {
  sendMessage: (content: string) => void;
}

const SendMessageBox: FC<Props> = ({sendMessage}) => {
  const [content, setContent] = useState('')
  return (
    <div className='bg-white h-[45px] flex flex-row'>
      <textarea name="" className='flex-grow outline-none p-1' value={content}  onChange={(e) => setContent(e.target.value)}></textarea>
      <button className='w-[12%] bg-[#5fe3c0] hover:bg-[#3B80BE] text-black' onClick={() => {
        sendMessage(content)
        setContent('')
      }}>Send</button>
    </div>
  )
}

export default SendMessageBox