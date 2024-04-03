const calculateTip = (amount: number, percent: number) => {
    return Math.round((amount * percent) * 100) / 100;
}

const perPerson = (people: number, amount: number) => {
    return Math.round((amount / people) * 100) / 100;
}

export {calculateTip, perPerson}