//Write a function that will validate date from text input in french format and convert it to a date object
export function validateDate(dateString: string): Date | null {
  // Check if the date is in the format "dd/mm/yyyy"
  const datePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/;
  if (!datePattern.test(dateString)) {
    return null; // Invalid date format
  }
  // Split the date string into components
  const [day, month, year] = dateString.split('/').map(Number);
  // Create a new Date object
  const date = new Date(year, month - 1, day); // Month is 0-indexed in JavaScript
  // Check if the date is valid
  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
    return null; // Invalid date
  }
  return date; // Return the valid date object
}

//Write a function that will validate the format of a GUID string
export function validateGUID(guid: string): boolean {
    const guidPattern = /^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$/;
    return guidPattern.test(guid);
}

//Write a function that will validate the format of an IPV6 address string
export function validateIPv6(ipv6: string): boolean {
    const ipv6Pattern = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
    return ipv6Pattern.test(ipv6);
}