
const getUser = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  return  await response.json();
};

export { getUser };
