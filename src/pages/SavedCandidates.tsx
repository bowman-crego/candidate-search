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

  const handleDelete = (index: number) => { 
    const storedCandidates = localStorage.getItem("potentialCandidate");
    const candidates = storedCandidates ? JSON.parse(storedCandidates) : [];
    candidates.splice(index, 1);
    localStorage.setItem("potentialCandidate", JSON.stringify(candidates));
    setCandidates(candidates);
  }

  return (
    <>
      <h1>Potential Candidates</h1>
      <table className="table">
        <thead>
          <tr>
            <th className="">Image</th>
            <th className="">Username</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Bio</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate, index) => (
            <tr className=""key={index}>
              <td className="">
                <img className="image" src={candidate.Avatar_url}/></td>
                <td className="login">{candidate.Login}</td>
              <td>{candidate.Username}</td>
              <td>{candidate.Email}</td>
              <td>{candidate.Company}</td>
              <td>{candidate.Bio}</td>
              <td>
                <button className="button-container">
                  <span onClick={() => handleDelete(index)}>Remove</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SavedCandidates;
