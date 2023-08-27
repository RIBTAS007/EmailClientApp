import React, { useState, useEffect } from "react";
import styles from "./css/App.module.css";
import { fetchEmails, fetchEmailBody } from "./api/emailAPI";
import EmailList from "./components/EmailList";
import EmailBody from "./components/EmailBody";

function App() {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [isFullWidthLayout, setIsFullWidthLayout] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    fetchEmails(currentPage) // Fetch emails for the current page
      .then((data) => {
        const modifiedEmails = data.list.map((email) => ({
          ...email,
          read: false,
          unread: true,
          favorite: false,
        }));
        setEmails(modifiedEmails);
      })
      .catch((error) => console.error("Error fetching emails:", error));
  }, [currentPage]);

  const handleEmailClick = async (emailId) => {
    if (selectedEmail && selectedEmail.id === emailId) {
      setSelectedEmail(null);
      setIsFullWidthLayout(true);
    } else {
      const selectedEmail = emails.find((email) => email.id === emailId);

      setIsFullWidthLayout(false);
      setSelectedEmail(selectedEmail);

      if (selectedEmail && !selectedEmail.body) {
        try {
          const data = await fetchEmailBody(emailId);
          setSelectedEmail((prevSelectedEmail) => ({
            ...prevSelectedEmail,
            body: data.body,
          }));
        } catch (error) {
          console.error("Error fetching email body:", error);
        }
      }
    }
  };

  const handleMarkRead = (emailId) => {
    const updatedEmails = emails.map((email) =>
      email.id === emailId ? { ...email, read: true, unread: false } : email
    );
    setEmails(updatedEmails);
  };

  const handleToggleFavorite = (emailId) => {
    const updatedEmails = emails.map((email) =>
      email.id === emailId ? { ...email, favorite: !email.favorite } : email
    );
    setEmails(updatedEmails);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSelectedEmail(null);
    setIsFullWidthLayout(true);
  };

  if (emails === undefined || emails.length === 0) {
    return <p>Loading emails...</p>;
  }

  return (
    <div
      className={`${styles.appContainer}  ${
        isFullWidthLayout ? styles.fullWidthLayout : styles.masterSlaveLayout
      }`}
    >
      <div
        className={styles.emailListContainer}
        style={{ width: selectedEmail ? "50%" : "100%" }}
      >
        {emails.length > 0 ? (
          <EmailList
            emails={emails}
            selectedEmail={selectedEmail}
            onEmailClick={handleEmailClick}
            setEmails={setEmails}
            handleMarkRead={handleMarkRead}
          />
        ) : (
          <p>Loading emails...</p>
        )}
        {/* Pagination buttons */}
        <div className={styles.pagination}>
          <button
            onClick={() => handlePageChange(1)}
            className={currentPage === 1 ? styles.active : ""}
          >
            Page 1
          </button>
          <button
            onClick={() => handlePageChange(2)}
            className={currentPage === 2 ? styles.active : ""}
          >
            Page 2
          </button>
        </div>
      </div>
      <div
        className={styles.emailBodyContainer}
        style={{ width: selectedEmail ? "50%" : "0" }}
      >
        {selectedEmail && (
          <EmailBody
            email={selectedEmail}
            handleToggleFavorite={handleToggleFavorite}
            isFavorite={isFavorite} // Pass isFavorite as prop
            setIsFavorite={setIsFavorite}
          />
        )}
      </div>
    </div>
  );
}

export default App;
