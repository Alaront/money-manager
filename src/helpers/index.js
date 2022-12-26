const localStorageWrite = (key = "", data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const localStorageRead = (key) => {
  if (localStorage.getItem(key) != null) {
    return JSON.parse(localStorage.getItem(key));
  }

  return {
    error: "key not found",
  };
};

export { localStorageWrite, localStorageRead };
