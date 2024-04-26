import CloseX from "../../Assets/NavIcons/CloseX.svg?react"
import Topics from "./Topics"
import Logo from "../../Assets/Icons/logo.png"

const Sidebar = ({ openMenu, handleToggleopenMenu }) => {
  return (
    <div
      className={`bg-black text-white z-50 fixed h-screen w-[24rem] top-0 right-0 transform transition-transform duration-300 ${
        openMenu ? "translate-x-0" : "translate-x-full"
      } md:w-[28rem]`}
    >
      <div className="flex flex-col gap-16 px-10 py-4 lg:py-12">
        <div className="flex justify-between items-center">
          <img src={Logo} width={50} alt="Logo" />
          <CloseX className="cursor-pointer" onClick={handleToggleopenMenu} />
        </div>
        <div>
          <div className="flex flex-col gap-5 tracking-widest text-[0.960rem]">
            <Topics />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
