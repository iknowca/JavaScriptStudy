gugudan:
for (var i=2; i <=9; i++) {
    dan:
    for(var j=1; j<=9; j++) {
        if((i*j)%2==0) {
            continue dan;
        }
        console.log(i+"*"+j+"="+(i*j)+"\n");
    }
}