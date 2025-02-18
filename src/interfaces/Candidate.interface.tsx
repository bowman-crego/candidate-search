// TODO: Create an interface for the Candidate objects returned by the API
interface Candidate {
  // Name: string | null;
  Image: string;
  Avatar_url: string;
  Username: string;
  Location: string | null;
  Email: string | null;
  Company: string | null;
  Bio: string | null;
  Html_url: string;
  Login: string;
}

export default Candidate;
