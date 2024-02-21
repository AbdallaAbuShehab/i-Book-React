import { useState } from "react";

import Footer from "./components/fotter";
import Header from "./components/header";
import Post from "./components/post/post";
import ProfileModel from "./components/post/profile";

export default function App() {
  const [showModel, setShowModel] = useState(false);
  const [usernameClickObj, setUsernameClickObj] = useState({});

  return (
    <div className="container mx-auto min-h-screen p-4 faml">
      <Header />
      <Post
        setShowModel={setShowModel}
        setUsernameClickObj={setUsernameClickObj}
      />
      <Footer />
      <ProfileModel
        isVisable={showModel}
        onClose={() => setShowModel(false)}
        usernameClickObj={usernameClickObj}
      />
    </div>
  );
}
