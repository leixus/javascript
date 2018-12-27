function lxcontinue() {
    var num = 0;

    for (var i = 0; i < 10; i ++) {
        // num = 4， i = 5， 不执行，接着循环，
        // num = 8， i = 10， i 不小于10，for循环结束
        if (i % 5 == 0) {
            continue;
        }

        num++;
    }

    console.log(num);
}