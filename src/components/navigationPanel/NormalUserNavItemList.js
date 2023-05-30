import React from 'react'
import NavItem from './NavItem'

function NormalUserNavItemList({ handleListItemClick, selectedIndex }) {
    return (
        <>
            <NavItem
                index={0}
                handleListItemClick={handleListItemClick}
                selectedIndex={selectedIndex}
                url={'/dashboard'}
                title={'Página principal'}
            />
            <NavItem
                index={1}
                handleListItemClick={handleListItemClick}
                selectedIndex={selectedIndex}
                url={'/dashboard/favs'}
                title={'Favoritos'}
            />
            <NavItem
                index={2}
                handleListItemClick={handleListItemClick}
                selectedIndex={selectedIndex}
                url={'/dashboard/preferences'}
                title={'Preferencias'}
            />
            <NavItem
                index={3}
                handleListItemClick={handleListItemClick}
                selectedIndex={selectedIndex}
                url={'user'}
                title={'Perfil'}
            />
            <NavItem
                index={4}
                handleListItemClick={handleListItemClick}
                selectedIndex={selectedIndex}
                url={'add-item'}
                title={'Añadir item'}
            />
        </>
    )
}

export default NormalUserNavItemList
