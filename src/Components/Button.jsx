/* eslint-disable react/prop-types */
const Button = ({ text, icon, ativo, onClick }) => {
  const variants = {
    colorButton: "bg-[#D73518]",
    borderActive: "border border-white",
  }

  return (
    <button
      className={`flex flex-row text-xs lg:text-sm font-medium justify-center items-center gap-2 ${variants[ativo]} px-2 py-2 md:py-5 md:px-5 lg:px-4 lg:py-4 hover:bg-white focus:bg-white hover:text-black focus:text-black duration-200`}
      onClick={onClick}
      name="button"
    >
      <i className="icon">{icon}</i>
      {text}
    </button>
  )
}

export default Button
