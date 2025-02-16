// friendshipStrength.js

/**
 * Calculates a fun 'Friendship Strength' percentage between two names.
 * Uses a playful algorithm based on character codes and randomness.
 * @param {string} name1 - First person's name.
 * @param {string} name2 - Second person's name.
 * @returns {number} - Friendship strength (0-100%).
 */
function calculateFriendshipStrength(name1, name2) {
    if (!name1 || !name2) throw new Error("Both names are required!");
  
    const combined = (name1 + name2).toLowerCase();
    let score = combined
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
    // Introduce playful randomness (but deterministic across sessions)
    const randomFactor = Math.sin(score) * 50 + 50;
  
    return Math.min(100, Math.max(0, Math.floor(randomFactor)));
  }
  
  // Example Usage
  console.log("Friendship Strength:", calculateFriendshipStrength("Alice", "Bob"), "%");
  
  // Export for Node.js environments
  if (typeof module !== 'undefined') {
    module.exports = calculateFriendshipStrength;
  }
  