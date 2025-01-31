import { useState, useEffect } from "react";
import Candidate from "../interfaces/Candidate.interface";

const SavedCandidates = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const storedCandidates = localStorage.getItem("potentialCandidate");
    if (storedCandidates) {
      setCandidates(JSON.parse(storedCandidates));
    }
  }, []);

  return (
    <>
      <h1>Potential Candidates</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Bio</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate, index) => (
            <tr key={index}>
              <td>{candidate.Name}</td>
              <td>{candidate.Login}</td>
              <td>{candidate.Location}</td>
              <td>{candidate.Email}</td>
              <td>{candidate.Company}</td>
              <td>{candidate.Bio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SavedCandidates;
