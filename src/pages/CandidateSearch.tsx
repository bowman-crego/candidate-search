import { useState, useEffect } from "react";
import { searchGithub, searchGithubUser } from "../api/API.tsx";
import Candidate from "../interfaces/Candidate.interface";

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    // Name: "",
    Login: "",
    Username: "",
    Location: "",
    Avatar_url: "",
    Email: "",
    Html_url: "",
    Company: "",
    Bio: "",
  });

  const addToPotentialCandidates = () => {
    let potentialCandidates: Candidate[] = [];
    const storedPotentialCandidates =
      localStorage.getItem("potentialCandidate");
    if (storedPotentialCandidates) {
      potentialCandidates = JSON.parse(storedPotentialCandidates);
    }
    potentialCandidates.push(currentCandidate);
    localStorage.setItem(
      "potentialCandidate",
      JSON.stringify(potentialCandidates)
    );
  };

  useEffect(() => {
    const result = searchGithub();
    result.then((data) => {
      console.log(data);
    });
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await searchGithubUser();
      setCurrentCandidate({
        // Name: data.name,
        Login: data.login,
        Username: data.username,
        Location: data.location,
        Avatar_url: data.avatar_url,
        Email: data.email,
        Html_url: data.html_url,
        Company: data.company,
        Bio: data.bio,
      } as Candidate);
    };
    fetchUserData();
  }, []);

  return (
    <>
      <h1>CandidateSearch</h1>
      <div className="candidate-card" key={currentCandidate.Username}>
        <div className="candidate-card-image">
          <img src={currentCandidate.Avatar_url} alt="" />
        </div>
        <div className="candidate-card-info">
          <div>{currentCandidate.Avatar_url}</div>
          <div>{currentCandidate.Location}</div>
          <div>{currentCandidate.Email}</div>
          <div>{currentCandidate.Company}</div>
          <div>{currentCandidate.Bio}</div>
        </div>
      </div>
      <div className="button-container">
        <div
          className="minus-button"
          onClick={searchGithub || searchGithubUser}
        >
          -
        </div>
        <div className="plus-button" onClick={addToPotentialCandidates}>
          +
        </div>
      </div>
    </>
  );
};

export default CandidateSearch;
