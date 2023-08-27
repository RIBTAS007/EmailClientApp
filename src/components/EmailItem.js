import React, { useEffect, useState } from "react";
import styles from "../css/EmailItem.module.css";

const EmailItem = ({ email, isSelected, onEmailClick, handleMarkRead }) => {
  const [read, setRead] = useState(false);

  const handleItemClick = () => {
    if (isSelected) {
      onEmailClick(null);
    } else {
      onEmailClick(email.id);
      if (!email.read) {
        handleMarkRead(email.id);
      }
    }
  };

  useEffect(() => {
    setRead(email.read);
  }, [email]);

  const avatarStyle = {
    backgroundColor: read ? "#636363" : "#e54065",
  };

  return (
    <li
      className={`${styles.emailItem} ${isSelected ? styles.selected : ""}`}
      onClick={handleItemClick}
    >
      <div className={styles.avatar} style={avatarStyle}>
        {email.from.name.charAt(0)}
      </div>
      <div className={styles.emailInfo}>
        <div className={styles.emailFrom}>
          From:{" "}
          <b>
            {email.from.name} ({email.from.email})
          </b>
        </div>
        <div className={styles.emailSubject}>
          Subject: <b>{email.subject}</b>
        </div>
        <div className={styles.emailDescription}>{email.short_description}</div>
        <div className={styles.emailDate}>
          {new Date(email.date).toLocaleString()}
          {email.favorite ? (
            <div className={styles.favoriteText}>Favorite</div>
          ) : (
            ""
          )}
        </div>
      </div>
    </li>
  );
};

export default EmailItem;
