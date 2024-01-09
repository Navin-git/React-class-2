const Card = ({ pic, title, dec }) => {
  return (
    <div className="card">
      <img src={pic} alt="" className="h-[250px] w-full object-cover" />
      <div className="mt-2">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-gray-600">{dec}</p>
      </div>
    </div>
  );
};

export default Card;
