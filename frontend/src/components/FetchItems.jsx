import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();



  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    // const controller = new AbortController();
    // const signal = controller.signal;

    // Fetch Data
    dispatch(fetchStatusActions.markFetchingStarted());

    fetch(`${import.meta.env.VITE_SOME_KEY}/items`,{
        method: 'GET'
    })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(itemsActions.addInitialItems(items[0]));
      });
  }, [fetchStatus]);
  return <></>;
};

export default FetchItems;
