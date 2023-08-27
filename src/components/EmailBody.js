import React, { useState, useEffect } from "react";
import styles from "../css/EmailBody.module.css";

const EmailBody = ({ email, handleToggleFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(email.favorite);
  const paragraphs = email.body ? email.body.split("</p>") : [];

  useEffect(() => {
    setIsFavorite(email.favorite);
  }, [email.favorite]);

  useEffect(() => {
    setIsFavorite(email.favorite);
  }, [email]);

  const handleFavoriteClick = () => {
    handleToggleFavorite(email.id);
    setIsFavorite((prevState) => !prevState);
  };

  const avatarStyle = {
    backgroundColor: email.read ? "#636363" : "#e54065",
  };

  return (
    <div className={styles.emailBody}>
      <div className={styles.emailBodyHeader}>
        <div className={styles.heading}>
          <div className={styles.avatar} style={avatarStyle}>
            {email.from.name.charAt(0)}
          </div>
          <h2 className={styles.emailBodyHeaderH2}>{email.subject}</h2>
        </div>
        <button
          className={`${styles.emailBodyHeaderButton} ${
            isFavorite ? styles.marked : ""
          }`}
          onClick={handleFavoriteClick}
        >
          {isFavorite ? "Remove from favourites" : "Mark as Favourite"}
        </button>
      </div>
      <div className={styles.emailDate}>
        {new Date(email.date).toLocaleString()}
      </div>
      <div className={styles.emailBodyContent}>
        {paragraphs.map((paragraph, index) => (
          <React.Fragment key={index}>
            <p
              className={styles.emailBodyContentP}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
            {index !== paragraphs.length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default EmailBody;
