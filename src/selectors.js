export const selectAmount = state => Object.values(state.cart)
        .reduce(function (previousValue, currentValue) {

            return previousValue + currentValue;
        }, 0)