const STORAGE_KEY = "python-progress";

export const getProgress = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveProgress = (topic) => {
  const current = getProgress();
  if (!current.includes(topic)) {
    const updated = [...current, topic];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  }
  return current;
};