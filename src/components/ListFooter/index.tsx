import React from 'react'
import IItemMenu from '../../types/ItemMenu'


export default function ListaFooter({ itemMenu }: {itemMenu: IItemMenu[]}) {
  return (
    <>
        <ul>
            {itemMenu.map((item): any => (
                <li key={item.id} className='list__item'>
                    <a href={item.url}>{item.anchor}</a>
                </li>
            ))}
        </ul>
    </>
  )
}
