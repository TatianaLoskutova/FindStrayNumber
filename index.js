function stray(numbers) {
    let res1 = numbers.join('').split(numbers[0]).join('')
    let res2 = numbers.join('').split(numbers[1]).join('')

    return res1.length === 1 ? +res1 : +res2
}