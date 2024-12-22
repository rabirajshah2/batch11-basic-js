const today = new Date();
console.log(today);

const day = today.getDate();
console.log(day);

const hours = today.getHours();
console.log(hours);

const minutes = today.getMinutes();
console.log(minutes);

const formattedDate = today.toLocaleDateString("ne-NP");
console.log("Formatted Date " + formattedDate);
