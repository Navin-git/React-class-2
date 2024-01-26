import React, { useEffect, useState } from "react";
import PostCard from "../components/common/PostCard";
import axios from "axios";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState({});
  const getPost = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPostData(res?.data);
      });
  };
  useEffect(() => {
    getPost();
  }, [id]);
  return (
    <div className="card">
      <img
        src={
          "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/14/yvA5SpUH-IMG-Worlds.jpg"
        }
        alt=""
        className="h-[250px] w-full object-cover"
      />
      <div className="mt-2">
        <div className="flex gap-2 items-center justify-between">
          <h1 className="text-xl font-semibold line-clamp-1">
            {postData?.title}
          </h1>
        </div>
        <p className="text-gray-600 line-clamp-2">{postData?.body}</p>
      </div>
    </div>
  );
};

export default PostDetails;
