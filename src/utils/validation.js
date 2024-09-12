// Validation regex patterns
export const regexPatterns = {
    name: /^[a-zA-Z\s]+$/,           // Allows letters and spaces
    phone: /^[0-9]{10}$/,            // 10-digit phone number
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Basic email pattern
    cardId: /^[0-9]{6}$/,            // 6-digit card ID
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, // Minimum 6 characters, at least one letter and one number
  };
  
  // Validation functions
  export const validateForm = (formData) => {
    const errors = {};
  
    if (!regexPatterns.name.test(formData.name)) {
      errors.name = 'Name is required and should only contain letters and spaces.';
    }
    if (!regexPatterns.phone.test(formData.phone)) {
      errors.phone = 'Phone number must be exactly 10 digits.';
    }
    if (!regexPatterns.email.test(formData.email)) {
      errors.email = 'Invalid email format.';
    }
    if (!regexPatterns.cardId.test(formData.cardId)) {
      errors.cardId = 'Card ID must be exactly 6 digits.';
    }
    if (!regexPatterns.password.test(formData.password)) {
      errors.password = 'Password must be at least 6 characters long and contain both letters and numbers.';
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match.';
    }
  
    return errors;
  };
  