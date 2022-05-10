let year = parseInt(prompt("Enter a year"));
if(year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            document.write(year + " is a leap year");
        } else {
            document.write(year + " is NOT a leap year");
        }

    } else {
        document.write(year + " is a leap year");
    }
} else {
    document.write(year + " is NOT a leap year");
}
