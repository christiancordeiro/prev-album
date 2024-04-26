const MusicVideo = () => {
  return (
    <>
      <h1 className="text-2xl md:text-3xl lg:text-[2rem] mt-12 mb-8 font-bold">
        MUSIC VIDEO
      </h1>
      <iframe
        rel="preconnect"
        className="h-56 md:min-w-96 md:min-h-96"
        src="https://www.youtube.com/embed/FUXX55WqYZs"
        title="Youtube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </>
  )
}

export default MusicVideo
