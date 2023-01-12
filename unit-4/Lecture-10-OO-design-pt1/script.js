/*
1. Create a class `Account`.
2. An instance of `Account` has two data properties, 
`owner` which is a string and `balance` which is a numeric dollar amount.
3. An instance of `Account` has three methods: `checkBalance`, `deposit`, `withdraw`.
4. `checkBalance` takes no parameters and returns a string in 
the format `<owner> has $<balance> in this account.`
5. `deposit` takes a single number parameters and adds it 
to the `balance` property. It should also return a string in the format `"$<amount> was deposited to this account."`
6. `withdraw` takes a single number parameters and subtracts it to the `balance` property. It should also return a string in the format `"$<amount> was withdrawn from this account."`
7. **You should not be allowed to withdraw more than what's in the account**, in which case, return `"Not enough funds."` and do not update the `balance` property.
*/