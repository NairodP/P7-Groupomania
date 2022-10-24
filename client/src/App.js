import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/userActions";
import { UidContext } from "./components/AppContext";
import Routes from "./components/Routes";

const App = () => {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch(); 

  useEffect(() => {
    const axiosToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => setUid(res.data))
        .catch((err) => console.log(err));
    };
    axiosToken();

    if (uid) dispatch(getUser(uid))
  }, [uid]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
};

export default App;