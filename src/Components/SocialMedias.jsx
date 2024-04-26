import Insta from "../Assets/NavIcons/Insta.svg?react"
import Tiktok from "../Assets/NavIcons/Tiktok.svg?react"
import X from "../Assets/NavIcons/X.svg?react"
import Twitch from "../Assets/NavIcons/Twitch.svg?react"
import Face from "../Assets/NavIcons/Face.svg?react"
import Discord from "../Assets/NavIcons/Discord.svg?react"

const SocialMedias = () => {
  return (
    <>
      <a href="https://www.instagram.com/christianc_f/" target="_blank">
        <Insta className="w-5 h-5" />
      </a>
      <a href="#">
        <Tiktok className="w-5 h-5" />
      </a>
      <a href="#">
        <X className="w-5 h-5" />
      </a>
      <a href="#">
        <Twitch className="w-5 h-5" />
      </a>
      <a href="#">
        <Face className="w-5 h-5" />
      </a>
      <a href="#">
        <Discord className="w-5 h-5" />
      </a>
    </>
  )
}

export default SocialMedias
