const searchGithub = async () => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;
    // console.log(import.meta.env);
    const response = await fetch(
      `https://api.github.com/users?since=${start}`,
      {
        headers: {
          Authorization:
            "Bearer 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",
        },
      }
    );
    // console.log("Response:", response);
    const data = await response.json();
    if (!response.ok) {
      throw new Error("invalid API response, check the network tab");
    }
    // console.log("Data:", data);
    return data;
  } catch (err) {
    // console.log('an error occurred', err);
    return [];
  }
};

const searchGithubUser = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization:
          "Bearer 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",
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error("invalid API response, check the network tab");
    }
    console.log(data);
    return data;
  } catch (err) {
    // console.log('an error occurred', err);
    return {};
  }
};

export { searchGithub, searchGithubUser };
