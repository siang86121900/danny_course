function multiplication() {
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            const x = i * j
            console.log(i + "X" + j + "=" +
                x)
        }
    }
}

multiplication()