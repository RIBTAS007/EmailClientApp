const BASE_URL = "https://flipkart-email-mock.vercel.app";

export async function fetchEmails(page = 1) {
  const response = await fetch(`${BASE_URL}/?page=${page}`);
  const data = await response.json();
  return data;
}

export async function fetchEmailBody(emailId) {
  const response = await fetch(`${BASE_URL}/?id=${emailId}`);
  const data = await response.json();
  return data;
}
