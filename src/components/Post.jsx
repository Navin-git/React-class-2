import React, { useEffect, useMemo, useState } from "react";
import Title from "./common/Title";
import PostCard from "./common/PostCard";
import axios from "axios";

const PostList = () => {
  const [list, setList] = useState([]);

  const getList = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => {
        setList(res?.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  useEffect(() => {
    getList();
  }, []);
  return (
    <div className="space-y-10 dark:bg-slate-700">
      <div className="flex items-center justify-between">
        <Title title={"Post"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 dark:bg-gray-400 gap-3">
        {Array.isArray(list) &&
          list.map((item, index) => {
            return (
              <PostCard
                key={index}
                dec={item?.body}
                pic={item?.image}
                title={item?.title}
                id={item?.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default PostList;
