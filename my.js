let sout, i, j;
sout = "<table border='1' width='300' cellspacing='10' cellpadding='10'>";
i = 1;
j=2
while (i <= 9) {
    sout = sout + "<tr>";
    while (j <= 9) {
        sout = sout + "<td>" + i + "*" + j + "=" +(i * j) + "</td>";
        j++;

            }
    sout = sout + "</tr>";
    j = 2;
    i++;
}
sout = sout + "</table>";
document.write(sout);