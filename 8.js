//تبدیل دقیقه به ساعت
var minutes = prompt("Enter your time (minute): ")

var minutesToHours = minutes / 60

if (isNaN(minutesToHours)) {
	alert("invalid number!")
} else {
	alert(minutesToHours + " Hours")
}
