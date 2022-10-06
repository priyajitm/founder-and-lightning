import { useEffect, useState } from "react";
import { searchProps } from "../types";

const Search = ({ handleSearch }: searchProps) => {
  const [email, setEmail] = useState<string>("");
  const [showError, setShowError] = useState<boolean>(false)

  const validateSubmit = (email: string) => {
    if (email) {
      handleSearch(email)
    } else {
      setShowError(true)
    }
  }

  useEffect(() => {
    if (showError) {
      setTimeout(()=> {
        setShowError(false)
      }, 1000)
    }
  }, [showError])

  return (
    <div className="search">
      <p className="search-title">
        Enter Your Email To Search For Your Pictures
      </p>
      <div className="search-container">
        <input
          className="search-email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={() => validateSubmit(email)}>Search</button>
      </div>
      {showError && <p className="email-error">Please enter a valid email address</p>}
    </div>
  );
};

export default Search;
