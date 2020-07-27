import React from 'react';

import TrashIcon from './icons/trash.svg';

import {useArray} from './hooks';

const Th = ({children}) => <th className='bg-blue-100 border text-left px-8 py-4'>{children}</th>;
const Td = ({children}) => <td className='border px-8 py-4'>{children}</td>;

export default ({users}) => {
  const [userList] = useArray(users);

  return (
    <div className='overflow-scroll h-full w-3/4 m-auto'>
      <table className='shadow-lg bg-white'>
        <thead>
          <tr className='bg-white'>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {userList.map(([{name, email, deleted = false}, update]) => (
            <tr key={email} className={`mx-5 ${deleted && 'border-solid border-2 border-black'}`}>
              <Td>{name}</Td>
              <Td>{email}</Td>
              <Td>
                <button onClick={() => update(user => ({...user, deleted: true}))}>
                  <img src={TrashIcon} />
                </button>
              </Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};