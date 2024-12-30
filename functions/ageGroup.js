const ageGroup = (age) => {
  if (age >= 0 && age <= 2) {
    console.log("Baby");
  } else if (age >= 3 && age <= 39) {
    console.log("young adults");
  } else if (age >= 40 && age <= 59) {
    console.log("middle adults");
  } else if (age >= 60 && age <= 99) {
    console.log("old adults");
  }
};
ageGroup(24);
