import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const Fetchitems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    dispatch(fetchStatusActions.markFetchingStarted());
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then(({ items }) => {
        console.log(items);
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(itemActions.addInitialItems(items));
      });
  }, [fetchStatus]);

  return;
  d;
};

export default Fetchitems;
