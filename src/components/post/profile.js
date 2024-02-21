export default function ProfileModel({ isVisable, onClose, usernameClickObj }) {
  if (!isVisable) return;

  const handleCloseBlur = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center "
      id="wrapper"
      onClick={handleCloseBlur}
    >
      {/* //--- */}
      <div className="  w-[600px] flex flex-col mx-4 sm:mx-0 bg-white p-2 rounded-lg">
        <button className=" place-self-end" onClick={() => onClose()}>
          &#10008;
        </button>
        <div className=" rounded-lg bg-white p-2 grid grid-cols-1 justify-items-center sm:justify-items-start sm:grid sm:grid-cols-2 gap-4">
          {/* //--- */}

          <p className="font-semibold text-neutral-500 dark:text-neutral-400 ">
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              Name:
            </span>{" "}
            {usernameClickObj.name}
          </p>

          <p className="font-semibold text-neutral-500 dark:text-neutral-400 ">
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              Username:
            </span>{" "}
            {usernameClickObj.username}
          </p>

          <p className="font-semibold text-neutral-500 dark:text-neutral-400 ">
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              Email:
            </span>{" "}
            {usernameClickObj.email}
          </p>

          <p className="font-semibold text-neutral-500 dark:text-neutral-400 ">
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              Street:
            </span>{" "}
            {usernameClickObj.address.street}
          </p>

          <p className="font-semibold text-neutral-500 dark:text-neutral-400 ">
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              Suite:
            </span>{" "}
            {usernameClickObj.address.suite}
          </p>

          <p className="font-semibold text-neutral-500 dark:text-neutral-400 ">
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              City:
            </span>{" "}
            {usernameClickObj.address.city}
          </p>

          <p className="font-semibold text-neutral-500 dark:text-neutral-400 ">
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              Zipcode:
            </span>{" "}
            {usernameClickObj.address.zipcode}
          </p>

          <p className="font-semibold text-neutral-500 dark:text-neutral-400 ">
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              Coordinates:
            </span>{" "}
            {usernameClickObj.address.geo.lat} /{" "}
            {usernameClickObj.address.geo.lng}
          </p>

          <p className="font-semibold text-neutral-500 dark:text-neutral-400 ">
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              Phone:
            </span>{" "}
            {usernameClickObj.phone}
          </p>

          <p className="font-semibold text-neutral-500 dark:text-neutral-400 ">
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              Website:
            </span>{" "}
            {usernameClickObj.website}
          </p>

          <p className="font-semibold text-neutral-500 dark:text-neutral-400 ">
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              Company:
            </span>{" "}
            {usernameClickObj.company.name}
          </p>

          <p className="font-semibold text-neutral-500 dark:text-neutral-400 ">
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              Business:
            </span>{" "}
            {usernameClickObj.company.bs}
          </p>

          {/* ---// */}
        </div>
      </div>
      {/* ---// */}
    </div>
  );
}
