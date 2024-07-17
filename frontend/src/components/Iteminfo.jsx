import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useParams } from "react-router-dom";

const Iteminfo = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const items = useSelector((store) => store.items);
  const item = items.filter((item) => item.id === id)[0];
  const bag = useSelector((store) => store.bag);

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };
  const elementFound = item && bag.indexOf(item.id) >= 0;

  return (
    <>
      {item && (
        <section className="py-5 py-lg-5">
          <div className="container px-3 mx-auto">
            <div className=" mb-5 mx-n3 custom-div">
              <div className=" px-3 mb-4 col-md-6 mb-md-0">
                <div className="">
                  <div className="">
                    <img
                      className="w-100 rounded-lg custom-lg-height"
                      src={`/${item.image}`}
                      alt="test-img"
                    />
                  </div>
                </div>
              </div>
              <div className="px-3 col-md-6">
                <div className="pl-lg-5">
                  <div className="mb-3 ">
                    <h2 className=" h2 font-weight-bold">{item.company}</h2>
                    <h2 className="h4 font-weight-semibold text-secondary ">
                      {item?.item_name}
                    </h2>
                    <div className="d-flex flex-wrap align-items-center mb-3"></div>
                    <div className="rating">
                      {item.rating.stars} ⭐ | {item.rating.count}
                    </div>
                    <div className="price">
                      <span className="current-price">
                        Rs {item.current_price}
                      </span>
                      <span className="original-price">
                        Rs {item.original_price}
                      </span>
                      <span className="discount">
                        ({item.discount_percentage}% OFF)
                      </span>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h2 className="mb-2 fs-5 fw-bold text-gray-700">
                      Description :
                    </h2>
                    <p>{item.item_description}</p>
                  </div>

                  <div className="mb-6 " />
                  <div className="d-flex flex-wrap align-items-center mb-4">
                    {elementFound ? (
                      <button
                        type="button"
                        className="btn btn-danger btn-add-bag"
                        onClick={handleRemove}
                      >
                        <MdDelete />
                        Remove
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-success btn-add-bag"
                        onClick={handleAddToBag}
                      >
                        <IoIosAddCircleOutline />
                        Add to Bag
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Iteminfo;
