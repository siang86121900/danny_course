function prime(num) {
    if (num < 2) {
        return
    } else {
        for (i = 2; i < num + 1; i++) {
            for (j = 2; j < i + 1; j++) {
                if (j == i) {
                    console.log(i);
                } else if (i % j == 0) {
                    break;
                } else if (i % j !== 0) {
                    continue;
                }
            }
        }

    }
}

prime(111)