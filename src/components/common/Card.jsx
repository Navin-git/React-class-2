const Card = ({
  pic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYDM43pAzXkKe97pmZXJ_HEX68fQMQc0J_hRmmzxOmWDz_BPjv-rR5rDYXPWqfKdwNHKs&usqp=CAU",
  title = "",
  dec = "",
  rate,
  qty,
}) => {
  return (
    <div className="card">
      <img src={pic} alt="" className="h-[250px] w-full object-cover" />
      <div className="mt-2">
        <div className="flex gap-2 items-center justify-between">
          <h1 className="text-xl font-semibold">{title}</h1>
          <div>
            {rate} * {qty}
          </div>
        </div>
        <p className="text-gray-600">{dec}</p>
      </div>
    </div>
  );
};

export default Card;
