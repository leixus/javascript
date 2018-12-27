function lxbreak() {
    var num = 0;
    for (var i = 1; i < 10; i ++) {
        // num = 4，i= 5， 为true，跳出
        if (i % 5 == 0) {
            // 跳出循环，不在执行
            break;
        }

        num++;
    }

    console.log(num);
}