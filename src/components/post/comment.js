export default function Comment({ comment }) {
  return (
    <div className="flex flex-row bg-amber-200 p-2 rounded-md m-3 shadow-md hover:bg-amber-100 transition duration-300">
      <div>
        <span className=" text-md font-semibold text-neutral-800 dark:text-neutral-200 rounded-md px-1.5 hover:bg-amber-200 transition duration-300 cursor-pointer  py-0.1 bg-amber-300 shadow-md ">
          {comment.name.slice(0, 10)}
        </span>

        <p className=" text-sm mt-2.5 ml-3 ">{comment.body}</p>
      </div>
    </div>
  );
}
