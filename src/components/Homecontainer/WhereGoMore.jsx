import React from "react";
import { items } from "../../constants";


const WhereGoMore = () => {

  return (
    <>
      <div className="choosFrom__wrap p-0">
        <ul className="choosFrom__list grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li
              key={item.id}
              className="choosFrom__list--item flex items-center bg-gray-200 rounded-lg shadow cursor-pointer hover:shadow-lg p-4 transition"
            >
              <span className="appendRight12 mr-4 flex-shrink-0 ">
                <img
                  src={item.imgSrc}
                  alt={item.alt}
                  className="h-7 w-auto"
                />
              </span>
              <div className="choosFrom__list--itemDesc flex flex-col">
                <p className="font-bold text-sm text-gray-800">
                  {item.title}
                </p>
                {item.subtitle && (
                  <span className="text-xs text-gray-500 mt-1">
                    {item.subtitle}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default WhereGoMore;
