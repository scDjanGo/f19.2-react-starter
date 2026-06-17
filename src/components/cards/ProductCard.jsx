import { useEffect } from "react";

function ProductCard({ item }) {


  


  return (
      <div
          key={item?.id}
          className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
        >
          <img
            src={item?.image}
            alt={item?.title}
            className="h-56 w-full object-cover"
          />

          <div className="p-5">
            <p className="mb-2 text-sm text-gray-500">
              {new Date(item?.createdAt).toLocaleDateString()}
            </p>

            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              {item?.title}
            </h2>

            <p className="mb-4 text-sm text-gray-600">
              {item?.description}
            </p>

            <span className="text-xs text-gray-400">
              ID: {item?.id}
            </span>
          </div>
        </div>
  );
}

export default ProductCard;