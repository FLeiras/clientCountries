import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "../Styles/Activity.module.css";
import { deleteActivity, updateActivity } from "../redux/actions";
import { useState } from "react";

const ActivityCard = (activity) => {
  const dispatch = useDispatch();
  const updateActivities = useSelector((state) => state.copyCountries);
  const [updateAct, setUpdateAct] = useState(false);

  const [input, setInput] = useState({
    name: "",
    difficult: "",
    duration: "",
    season: "",
  });

  const handleDelete = () => {
    dispatch(deleteActivity(activity.id));
  };

  const handleUpdate = () => {
    if (activity.id && updateActivities.name && !updateAct) {
      setInput({
        ...input,
        name: updateActivities.name,
        difficult: updateActivities.difficult,
        duration: updateActivities.duration,
        season: updateActivities.season,
        country: updateActivities.country,
      });
      setInput(!updateAct);
    }
    /* if (activity.id) {
      dispatch(updateActivity(activity.id, input));
      alert("Actividad Modificada");
    } */
  };

  return (
    <div className={styles.container}>
      {activity && (
        <div className={styles.activity}>
          <p>
            <b>Activity : </b>
            {activity.name}
          </p>
          <p>
            <b>Difficult : </b>
            {activity.difficult}
          </p>
          <p>
            <strong>Duration : </strong>
            {activity.duration} Hours
          </p>
          <p>
            <strong>Season : </strong>
            {activity.season}
          </p>
        </div>
      )}

      <div className={styles.btnDel}>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <Link to="/post">
        <div className={styles.btnEd}>
          <button onClick={handleUpdate}>Edit</button>
        </div>
      </Link>
    </div>
  );
};

export default ActivityCard;
