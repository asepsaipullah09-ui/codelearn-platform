/**
 * Constants for progress management
 */
const STORAGE_KEY = "python-progress";
const DEFAULT_EMPTY_ARRAY = [];

/**
 * Retrieves the user's progress from localStorage
 * @returns {Array<string>} Array of completed topic IDs
 */
export const getProgress = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      return DEFAULT_EMPTY_ARRAY;
    }
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) ? parsed : DEFAULT_EMPTY_ARRAY;
  } catch (error) {
    console.error("Error reading progress from localStorage:", error);
    return DEFAULT_EMPTY_ARRAY;
  }
};

/**
 * Saves a completed topic to localStorage
 * @param {string} topic - The topic ID to mark as completed
 * @returns {Array<string>} The updated array of completed topics
 */
export const saveProgress = (topic) => {
  // Validate input
  if (!topic || typeof topic !== "string") {
    console.warn("Invalid topic provided to saveProgress");
    return getProgress();
  }

  const current = getProgress();
  const trimmedTopic = topic.trim();

  if (!current.includes(trimmedTopic)) {
    const updated = [...current, trimmedTopic];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  }
  return current;
};

/**
 * Checks if a specific topic has been completed
 * @param {string} topic - The topic ID to check
 * @returns {boolean} True if the topic is completed, false otherwise
 */
export const isTopicCompleted = (topic) => {
  if (!topic || typeof topic !== "string") {
    return false;
  }
  const current = getProgress();
  return current.includes(topic.trim());
};

/**
 * Removes a topic from the completed progress
 * @param {string} topic - The topic ID to remove
 * @returns {Array<string>} The updated array of completed topics
 */
export const removeTopic = (topic) => {
  if (!topic || typeof topic !== "string") {
    console.warn("Invalid topic provided to removeTopic");
    return getProgress();
  }

  const current = getProgress();
  const trimmedTopic = topic.trim();
  const updated = current.filter((t) => t !== trimmedTopic);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
};

/**
 * Resets all progress by clearing localStorage
 */
export const resetProgress = () => {
  localStorage.removeItem(STORAGE_KEY);
};
