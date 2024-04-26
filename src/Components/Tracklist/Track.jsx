import { useContext } from "react"
import { UserContext } from "../../Api"
import Share from "../../Assets/Icons/Share.svg?react"
import Play from "../../Assets/Icons/Play.svg?react"
import Stop from "../../Assets/Icons/Stop.svg?react"

const Track = ({ currentTrack, handlePlay }) => {
  const { tracks } = useContext(UserContext)

  function convertMinutes(durationMs) {
    const minutes = Math.floor(durationMs / 60000)
    const seconds = ((durationMs % 60000) / 1000).toFixed(0)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  return (
    <>
      {tracks.map((musica) => (
        <li key={musica.id} className="flex justify-between items-center py-5">
          <div className="flex gap-4 items-center justify-center">
            <p className="">{musica.track_number}</p>
            <button
              name="Iniciar reprodução"
              aria-label="Iniciar reprodução"
              onClick={() => handlePlay(musica.preview_url)}
            >
              {currentTrack &&
              currentTrack.audio &&
              currentTrack.audio.src === musica.preview_url ? (
                <Stop className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5" />
              )}
            </button>
            <div>
              <p className="font-semibold">{musica.name}</p>
              <span className="font-medium">{musica.artists[0].name}</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <p className="font-normal">{convertMinutes(musica.duration_ms)}</p>
            <Share className="w-[20px] h-[20px] cursor-pointer" />
          </div>
        </li>
      ))}
    </>
  )
}

export default Track
