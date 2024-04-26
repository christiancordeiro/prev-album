import { useContext, useEffect, useState } from "react"
import MenuHamburguer from "../../Assets/NavIcons/MenuHamburguer.svg?react"

import SocialMedias from "../SocialMedias"
import { UserContext } from "../../Api"
import Sidebar from "./Sidebar"

const Nav = () => {
  const { artist, albumName, imageAlbum } = useContext(UserContext)
  const [openMenu, setOpenMenu] = useState(false)
  const [menu, setMenu] = useState(false)

  const handleToggleopenMenu = () => {
    setOpenMenu((prevOpenMenu) => !prevOpenMenu)
  }

  useEffect(() => {
    if (artist && albumName && imageAlbum) {
      return setMenu(true)
    }
  }, [artist, albumName, imageAlbum])

  return (
    <>
      {menu && (
        <nav>
          <div className="fixed w-full text-white text-base z-40 py-6 backdrop-blur lg:backdrop-blur-none lg:bg-transparent lg:my-8 lg:w-0 lg:mr-24 ">
            <div className="flex flex-row-reverse justify-center lg:0 lg:inline-block">
              <div className="lg:pb-16 relative left-[10%] md:left-[20%] lg:left-0">
                <MenuHamburguer
                  className="cursor-pointer"
                  onClick={handleToggleopenMenu}
                />
              </div>
              <div
                className={`flex flex-row gap-6 justify-center items-center lg:flex-col`}
              >
                <SocialMedias />
              </div>
            </div>
          </div>
          <Sidebar
            openMenu={openMenu}
            handleToggleopenMenu={handleToggleopenMenu}
          />
        </nav>
      )}
    </>
  )
}

export default Nav
