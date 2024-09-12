// Validation regex patterns
export const regexPatterns = {
  name: /^[a-zA-Z\s]+$/,               // Allows letters and spaces
  phone: /^[0-9]{10}$/,                // 10-digit phone number
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Basic email pattern
  cardId: /^[0-9]{6}$/,                // 6-digit card ID
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, // Minimum 6 characters, at least one letter and one number
};

// Validation functions
export const validateForm = (email, password, name, cardId) => {
  const errors = {};

  if (!regexPatterns.email.test(email)) {
    errors.email = 'Invalid email format.';
  }
  
  if (!regexPatterns.password.test(password)) {
    errors.password = 'Password must be at least 6 characters long and contain both letters and numbers.';
  }
  
  if (name && !regexPatterns.name.test(name)) {
    errors.name = 'Name can only contain letters and spaces.';
  }
  
  if (cardId && !regexPatterns.cardId.test(cardId)) {
    errors.cardId = 'Card ID must be a 6-digit number.';
  }

  return Object.keys(errors).length > 0 ? errors : null;
};
