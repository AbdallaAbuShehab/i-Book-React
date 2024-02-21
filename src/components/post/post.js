import axios from "axios";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faComment,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

import User from "./user";
import Comment from "./comment";

export default function Post({ setShowModel, setUsernameClickObj }) {
  const [postData, setPostData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [commentData, setCommentData] = useState([]);

  useEffect(function () {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        // handle success
        setPostData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        // handle success
        setUserData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(function (response) {
        // handle success
        setCommentData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div className=" bg-stone-100 mt-4 p-6 container rounded-xl shadow-md grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 ">
      {/* //--- */}

      {postData.map((post) => {
        return (
          <div className=" bg-white rounded-xl shadow-md p-4 hover:-translate-y-2 hover:shadow-slate-400  transition duration-500">
            {/* //--- post section ---// */}
            <div>
              {userData.map((user) =>
                user.id === post.userId ? (
                  <User
                    user={user}
                    setShowModel={setShowModel}
                    setUsernameClickObj={setUsernameClickObj}
                  />
                ) : (
                  ""
                )
              )}

              <p className="mb-4 font-light text-neutral-500 dark:text-neutral-400">
                {post.body}
              </p>

              <div className="flex justify-between w-16  mb-3">
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  className=" text-cyan-600 cursor-pointer "
                />
                <FontAwesomeIcon
                  icon={faComment}
                  className=" text-black cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faShare}
                  className="  text-slate-500 cursor-pointer"
                />
              </div>

              <hr className="mb-5 h-0.5 border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />
            </div>

            {/* //--- comments section ---// */}
            <div className=" mb-0 pb-0">
              <p className="text-lg text-neutral-800 text-black font-semibold">
                Comments
              </p>
              {commentData.map((comnt) =>
                comnt.postId === post.id ? <Comment comment={comnt} /> : ""
              )}
            </div>
          </div>
        );
      })}

      {/* ---// */}
    </div>
  );
}
