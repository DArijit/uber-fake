export const formatDate = (inputDate: string) => {
  // Parse the input date string
  const parsedDate = new Date(inputDate);

  // Define month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the day, month, and year
  const day = parsedDate.getDate();
  const monthIndex = parsedDate.getMonth();
  const year = parsedDate.getFullYear();

  // Format the date string
  const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;

  return formattedDate;
};
