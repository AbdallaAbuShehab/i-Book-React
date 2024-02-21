export default function Footer() {
  const listFootArray = ["About", "Privacy Policy", "Licensing", "Contact"];

  return (
    <div className="mt-4 bg-stone-100 container shadow-md p-6 rounded-xl">
      <div className="w-full">
        {/* //--- */}
        <div className=" sm:flex sm:items-center sm:justify-between">
          <a
            href="#1"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <p className=" text-2xl rounded-r-lg bg-amber-300 p-2">&#9739;</p>
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
              i Book
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {listFootArray.map((el) => (
              <li>
                <a href="#1" className="hover:underline me-4 md:me-6">
                  {el}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* ---// */}

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a
            href="https://www.linkedin.com/in/abdullah-abu-shehab/"
            className="hover:underline"
          >
            Abdullah Abu Shehab
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  );
}
