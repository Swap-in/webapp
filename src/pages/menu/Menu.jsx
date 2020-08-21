import React from 'react' 
import Navbar from '../../Components/Navbar'
import MenuItems from '../../Components/MenuItems'
import Add from '../../assets/icons/add-icon.svg'
import Search from '../../assets/icons/search-icon.svg'
import HomeIcon from '../../assets/icons/home-icon.svg'
import Profile from '../../assets/icons/icono-perfil.svg'
import Notification from '../../assets/icons/icono-notificacion.svg'
import Exit from '../../assets/icons/exit-icon.svg'


function Menu() {
    return (
        <>
            <div>
                <Navbar/>
                <MenuItems
                    icon={Add}
                    title='Perfil'
                />
                <MenuItems
                    icon={Search}
                    title='Buscar'
                />
                <MenuItems
                    icon={HomeIcon}
                    title='Explorar'
                />
                <MenuItems
                    icon={Profile}
                    title='Perfil'
                />
                <MenuItems
                    icon={Notification}
                    title='Notificaciones'
                />
                <MenuItems
                    icon={Exit}
                    title='Logout'
                />
            </div>
        </>
    )
}

export default Menu