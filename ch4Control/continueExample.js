var exceptNum = 3;
for (var i=0; i<= 100 ; i++) {
    if (i % exceptNum == 0) {
        continue;
    }
    console.log(i+"");
}