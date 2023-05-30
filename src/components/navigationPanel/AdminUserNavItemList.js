import React from 'react'
import NavItem from './NavItem'

function AdminUserNavItemList({ handleListItemClick, selectedIndex }) {
    return (
        <>
            <NavItem
                index={0}
                handleListItemClick={handleListItemClick}
                selectedIndex={selectedIndex}
                url={'/dashboard'}
                title={'Items activos'}
            />
            <NavItem
                index={1}
                handleListItemClick={handleListItemClick}
                selectedIndex={selectedIndex}
                url={'/dashboard/review'}
                title={'Items en revisión'}
            />
            <NavItem
                index={2}
                handleListItemClick={handleListItemClick}
                selectedIndex={selectedIndex}
                url={'add-item'}
                title={'Añadir item'}
            />
        </>
    )
}

export default AdminUserNavItemList
