import React, { useState, useEffect } from "react";
import { getLinks } from "../src/lib/reads";
import { useParams } from "react-router-dom"; // <-- Import useParams

export default function ViewPage() {
  const [tlinks, setTLinks] = useState([]);
  const { id } = useParams(); // <-- Get UID from URL

  useEffect(() => {
    getLinks().then((result) => {
      const userLinks = result.filter(link => link.userUID === id); // <-- Use id from URL
      setTLinks(userLinks);
    });
  }, [id]);

  return (
    <>
      <div>
        {tlinks.map((link) => (
          <div key={link.id}>
            <p className="ps">
              {link.linkName}
              <br />
              <a className="c-link" href={link.linkID}>
                {link.linkID}
              </a>
              &emsp;
            </p>
          </div>
        ))}
      </div>
    </>
  );
}