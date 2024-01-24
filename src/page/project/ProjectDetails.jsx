import React, { useEffect, useState } from "react";
import { useHref, useNavigate, useParams } from "react-router-dom";
import { plist } from "../../components/product/ProductList";

const ProjectDetails = () => {
  const { slug } = useParams();
  const [details, setDetails] = useState(null);
  const pathname = useHref();
  const navigate = useNavigate();
  console.log(pathname);
  useEffect(() => {
    if (slug) {
      setDetails(plist.find((item) => item?.id.toString() === slug));
    }
  }, [slug]);
  return details === null || details ? (
    <div>
      <img
        src={details?.image}
        alt=""
        className="h-[250px] w-full object-cover"
      />
      <div className="mt-2 px-[5%]">
        <div className="flex gap-2 items-center justify-between">
          <h1 className="text-xl font-semibold">{details?.title}</h1>
          <div>
            {details?.rate} * {details?.qty}
          </div>
        </div>
        <p className="text-gray-600">{details?.dec}</p>
      </div>
    </div>
  ) : (
    <div>
      no data found go{" "}
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        home
      </button>
    </div>
  );
};

export default ProjectDetails;
