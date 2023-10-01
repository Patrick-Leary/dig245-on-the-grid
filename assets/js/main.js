
/* javascript */
console.log("Figma Link:")
console.log("https://www.figma.com/file/LThUlZXxFSfGzVEwvTYWBq/On-The-Grid?type=design&node-id=3-2&mode=design&t=n3aQux3GtGaYRNQj-0")

var monthNames = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
let d = Date();
let year = new Date(d).getFullYear(0);
let month = monthNames[new Date(d).getMonth(0)];
let day = new Date(d).getDate(0);
let currentDate = `${month} ${day}, ${year}`

document.getElementById('date').innerHTML = `Date:  ${currentDate}`;

