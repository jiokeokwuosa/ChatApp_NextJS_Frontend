import { FC, useState } from 'react'

type Props = {
  join: (name: string) => void;
}

const EntryBox: FC<Props> = ({ join }) => {
  const [name, setName] = useState('')
  return (
    <div className="w-full p-4 bg-white rounded-lg mt-2">
      <h5 className="text-xl font-medium text-gray-900 text-center">Welcome to Scanworks</h5>
      <p className="mb-2 text-sm font-medium text-gray-900 py-2 text-center">Enter your name to join the chat</p>
      <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-5" placeholder="eg. Andres" required />
      <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={() => join(name)}>Join</button>
    </div>
  )
}

export default EntryBox