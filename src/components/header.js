export default function Header() {
  const listArray = ["Friends", "Messages", "Groups", "Pages"];

  return (
    <div className="grid grid-rows-2 grid-cols-1 gap-2 justify-items-center content-start rounded-xl //--- sm:flex justify-between items-center bg-stone-100 p-6 shadow-md">
      <div className=" cursor-pointer flex items-center">
        <p className=" text-2xl rounded-r-lg bg-amber-300 p-2">&#9739;</p>
        <span className="self-center text-2xl font-semibold whitespace-nowrap  ml-3 text-black">
          i Book
        </span>
      </div>

      <form
        className="flex justify-center content-center //--- sm:flex"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="search"
          placeholder="over 100 post..."
          className=" bg-white rounded-xl pl-5 focus:outline-none "
        />
        <input
          type="submit"
          value="search 🔎"
          className=" bg-amber-300 rounded-l-3xl -ml-12 sm:-ml-4 px-5 shadow-md hover:bg-amber-200 transition duration-300 cursor-pointer"
        />
      </form>

      <ul className="hidden lg:flex gap-4 ">
        {listArray.map((el) => {
          return (
            <li className=" relative bg-amber-200 px-4 rounded-bl-xl hover:bg-amber-300 shadow-md transition duration-300 cursor-pointer	">
              {el}
              {el === "Messages" ? (
                <div className="absolute bottom-auto left-auto right-0 top-0 z-1 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-red-600 px-1.5 py-1 text-center align-baseline  font-bold leading-none text-white">
                  5+
                </div>
              ) : (
                ""
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
