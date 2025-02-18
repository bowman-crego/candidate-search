import { useState, useEffect } from "react";
import { searchGithub, searchGithubUser } from "../api/API.tsx";
import Candidate from "../interfaces/Candidate.interface";

const CandidateSearch: React.FC = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    Image: "",
    Avatar_url: "", 
    Username: "",
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
        Username: data.name,  
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
        <div className="candidate-card-image candidate-card-info">
          <img src={currentCandidate.Avatar_url} alt="" />
          <div>{currentCandidate.Login}</div>
          <div>{currentCandidate.Location}</div>
          <div>{currentCandidate.Email}</div>
          <div>{currentCandidate.Company}</div>
          <div>{currentCandidate.Bio}</div>
        </div>
      </div>
      <div className="button-container">
        <div
          className=""
          onClick={() =>
            setCurrentCandidate({
              Image: "",
              Username: "",
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
          <div className="minus-button symbol">-</div>
        </div>
        <div className="plus-button symbol" onClick={addToPotentialCandidates}>
          +
        </div>
      </div>
    </>
  );
};

export default CandidateSearch;


