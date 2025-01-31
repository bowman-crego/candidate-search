import { useState, useEffect } from "react";
import { searchGithub, searchGithubUser } from "../api/API.tsx";
import Candidate from "../interfaces/Candidate.interface";

const CandidateSearch: React.FC = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    // Name: "",
    Avatar_url: "",
    Location: "",
    Email: "",
    Company: "",
    Bio: "",
    Html_url: "",
    Login: "",
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

  // useEffect(() => {
  //   const result = searchGithub();
  //   result.then(async () => {
  //     // console.log(data);
  //   });
  // }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      const users = await searchGithub();
      const data = await searchGithubUser(users[0].login);
      setCurrentCandidate({
        // Name: data.name,
        Avatar_url: data.avatar_url,
        Location: data.location,
        Email: data.email,
        Company: data.company,
        Bio: data.bio,
        Html_url: data.html_url,
        Login: data.login,
      } as Candidate);
    };
    fetchUserData();
  }, []);

  return (
    <>
      <h1>CandidateSearch</h1>
      <div className="candidate-card" key={currentCandidate.Login}>
        <div className="candidate-card-image">
          <img src={currentCandidate.Avatar_url} alt="" />
        </div>
        <div className="candidate-card-info">
          <div>{currentCandidate.Location}</div>
          <div>{currentCandidate.Email}</div>
          <div>{currentCandidate.Company}</div>
          <div>{currentCandidate.Bio}</div>
        </div>
      </div>
      <div className="button-container">
        <div
          className="minus-button"
          onClick={() =>
            setCurrentCandidate({
              Avatar_url: "",
              Location: "",
              Email: "",
              Company: "",
              Bio: "",
              Html_url: "",
              Login: "",
            })
          }
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
