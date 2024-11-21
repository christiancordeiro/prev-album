import { createContext, useEffect, useState } from "react"
export const UserContext = createContext()

// eslint-disable-next-line react/prop-types
export const UserStorage = ({ children }) => {
  const [artist, setArtist] = useState("")
  const [albumName, setAlbumName] = useState("")
  const [imageAlbum, setImageAlbum] = useState("")
  const [tracks, setTrack] = useState("")

  const CLIENT_ID = import.meta.env.VITE_REACT_APP_SPOTIFY_CLIENT_ID_TOKEN
  const CLIENT_SECRET = import.meta.env
    .VITE_REACT_APP_SPOTIFY_CLIENT_SECRET_TOKEN

  useEffect(() => {
    const authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    }
    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => getAlbum(data.access_token))
  }, [])

  async function getAlbum(token) {
    const albumId = "2nkto6YNI4rUYTLqEwWJ3o"
    const fields =
      "artists.name,name,images.url,tracks.items(name,artists(name), preview_url, duration_ms)"

    const albumParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }

    try {
      const response = await fetch(
        `https://api.spotify.com/v1/albums/${albumId}?market=BR&fields=${encodeURIComponent(
          fields
        )}`,
        albumParameters
      )
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        const { artists, name, images, tracks } = data
        setArtist(artists[0].name.toUpperCase())
        setAlbumName(name.toUpperCase())
        setImageAlbum(images[0].url)
        setTrack(tracks.items)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <UserContext.Provider value={{ artist, albumName, imageAlbum, tracks }}>
      {children}
    </UserContext.Provider>
  )
}
