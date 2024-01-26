import { Link } from "react-router-dom";

const PostCard = ({
  pic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYDM43pAzXkKe97pmZXJ_HEX68fQMQc0J_hRmmzxOmWDz_BPjv-rR5rDYXPWqfKdwNHKs&usqp=CAU",
  title = "",
  dec = "",
  id,
}) => {
  return (
    <Link to={`/post/${id}`} className="card">
      <img src={pic} alt="" className="h-[250px] w-full object-cover" />
      <div className="mt-2">
        <div className="flex gap-2 items-center justify-between">
          <h1 className="text-xl font-semibold line-clamp-1">{title}</h1>
        </div>
        <p className="text-gray-600 line-clamp-2">{dec}</p>
      </div>
    </Link>
  );
};

export default PostCard;
