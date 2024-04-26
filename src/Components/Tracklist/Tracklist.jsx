import Track from "./Track"

const Tracklist = ({ currentTrack, handlePlay }) => {
  return (
    <section className="mt-16 lg:mt-[6rem] font-bold">
      <h1 className="text-2xl md:text-3xl lg:text-[2rem]">
        STREAM IT YOUR WAY
      </h1>
      <h1 className="text-2xl md:text-3xl lg:text-[2.5rem] mt-20 lg:mt-28">
        TRACK LIST
      </h1>
      <ul className="font-montserrat">
        <Track currentTrack={currentTrack} handlePlay={handlePlay} />
      </ul>
    </section>
  )
}

export default Tracklist
