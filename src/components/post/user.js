export default function User({ user, setShowModel, setUsernameClickObj }) {
  return (
    <div>
      <p className=" text-xl font-semibold text-neutral-800 text-black">
        <span>{user.name}</span>
      </p>
      <p className=" font-semibold text-neutral-500 dark:text-neutral-400 ">
        <span
          className="cursor-pointer hover:underline"
          onClick={() => {
            setShowModel(true);
            setUsernameClickObj(user);
          }}
        >
          @{user.username}
        </span>
      </p>
    </div>
  );
}
