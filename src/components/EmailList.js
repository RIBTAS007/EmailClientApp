import React, { useState, useEffect } from "react";
import EmailItem from "./EmailItem";
import styles from "../css/EmailList.module.css";

const EmailList = ({ emails, selectedEmail, onEmailClick, handleMarkRead }) => {
  const [filteredEmails, setFilteredEmails] = useState(emails);
  const [filter, setFilter] = useState("all");

  const applyFilter = (filter) => {
    switch (filter) {
      case "favorites":
        setFilteredEmails(emails.filter((email) => email.favorite));
        break;
      case "read":
        setFilteredEmails(emails.filter((email) => email.read));
        break;
      case "unread":
        setFilteredEmails(emails.filter((email) => !email.read));
        break;
      default:
        setFilteredEmails(emails);
        break;
    }
    setFilter(filter); // Update the current filter
  };

  useEffect(() => {
    applyFilter(filter);
  }, [filter, emails]);

  return (
    <div className={styles.emailList}>
      <div className={styles.filterButtons}>
        <p>Filter By:</p>
        <button
          onClick={() => applyFilter("all")}
          className={filter === "all" ? styles.active : ""}
        >
          All
        </button>
        <button
          onClick={() => applyFilter("favorites")}
          className={filter === "favorites" ? styles.active : ""}
        >
          Favorites
        </button>
        <button
          onClick={() => applyFilter("read")}
          className={filter === "read" ? styles.active : ""}
        >
          Read
        </button>
        <button
          onClick={() => applyFilter("unread")}
          className={filter === "unread" ? styles.active : ""}
        >
          Unread
        </button>
      </div>

      <ul>
        {filteredEmails.map((email) => (
          <EmailItem
            key={email.id}
            email={email}
            isSelected={selectedEmail?.id === email.id}
            onEmailClick={onEmailClick}
            handleMarkRead={handleMarkRead}
          />
        ))}
      </ul>
    </div>
  );
};

export default EmailList;
