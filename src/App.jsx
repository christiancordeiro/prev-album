import { useContext, useState } from "react"
import Play from "./Assets/Icons/Play.svg?react"
import Share from "./Assets/Icons/Share.svg?react"
import Stop from "./Assets/Icons/Stop.svg?react"
import { UserContext } from "./Api"
import Loading from "./Components/Helper/Loading"
import Button from "./Components/Button"
import Tracklist from "./Components/Tracklist/Tracklist"
import MusicVideo from "./Components/MusicVideo"

function App() {
  const { artist, albumName, imageAlbum, tracks } = useContext(UserContext)
  const [currentTrack, setCurrentTrack] = useState(false)

  if (!artist || !albumName || !imageAlbum) {
    return <Loading />
  }

  function handlePlay(previewUrl) {
    if (currentTrack && currentTrack.audio) {
      currentTrack.audio.pause()
      setCurrentTrack(false)
    } else {
      const newAudio = new Audio(previewUrl)
      newAudio.play()
      newAudio.addEventListener("ended", () => {
        setCurrentTrack(false)
      })
      setCurrentTrack({ audio: newAudio, currentTrack: true })
    }
  }

  return (
    <section className="text-colorWhite flex flex-col items-center">
      <div className="background-page">
        <img
          src={imageAlbum}
          alt="Background Photo Album"
          className="w-screen h-screen object-cover blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#080707]"></div>
      </div>
      <div className="flex flex-col justify-center z-0 pt-40 pb-16 px-8 ">
        <div className="flex flex-col-reverse lg:flex lg:flex-row-reverse">
          <div className="mt-10 lg:m-auto lg:pl-8">
            <h1 className="pb-2 title text-3xl blackFont md:text-4xl">
              {albumName}
            </h1>
            <h2 className="blackFont text-sm lg:text-xl">{artist}</h2>
            <div className="flex pt-12 gap-2 items-center">
              <Button
                text="LISTEN NOW"
                icon={
                  currentTrack ? (
                    <Stop className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5" />
                  )
                }
                ativo="colorButton"
                onClick={() => handlePlay(tracks[0].preview_url)}
              />
              <a
                href="https://open.spotify.com/intl-pt/album/2nkto6YNI4rUYTLqEwWJ3o"
                target="_blank"
              >
                <Button text="Full album" icon={<Share />} ativo="borderActive" />
              </a>
            </div>
          </div>
          <div className="grid-img-album font-montserrat ">
            <div
              className="rotate-0 order-1 mt-8 text-sm md:text-md lg:font-light lg:italic text-nowrap lg:-rotate-90 lg:order-none"
              style={{ width: "27px" }}
            >
              <span className="font-bold text-[#f49907]">Instintic</span>—
              Released July 7, 2018
            </div>
            <img
              src={imageAlbum}
              alt="Photo album"
              className="lg:w-[26rem] lg:h-[26rem]"
            />
          </div>
        </div>
        <Tracklist currentTrack={currentTrack} handlePlay={handlePlay} />
        <MusicVideo />
      </div>
    </section>
  )
}

export default App
