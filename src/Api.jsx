import { createContext, useEffect, useState } from "react"

export const UserContext = createContext()

// eslint-disable-next-line react/prop-types
export const UserStorage = ({ children }) => {
  const [artist, setArtist] = useState("")
  const [albumName, setAlbumName] = useState("")
  const [imageAlbum, setImageAlbum] = useState("")
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const response = await fetch(
          "https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/44730061"
        )

        if (response.ok) {
          const data = await response.json()
          console.log(data)

          setArtist(data.artist.name.toUpperCase())
          setAlbumName(data.title.toUpperCase())
          setImageAlbum(data.cover_big)
          setTracks(data.tracks.data)
        } else {
          console.error("Erro ao buscar o álbum:", response.statusText)
        }
      } catch (error) {
        console.error("Erro na requisição:", error)
      }
    }

    fetchAlbum()
  }, [])

  return (
    <UserContext.Provider value={{ artist, albumName, imageAlbum, tracks }}>
      {children}
    </UserContext.Provider>
  )
}
