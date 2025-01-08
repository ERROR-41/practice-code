const monthly_saving = (all_payment, liv_cost) => {
    if (Array.isArray(all_payment) && (!Number.isNaN(liv_cost))) {
        let sum = 0;
        all_payment.forEach((num) => {
            let tex = 3000 * .20;
            if (num >= 3000) {
                num -= tex;
            }
            sum += num;
        });

        if (sum - liv_cost >= 0) {
            console.log(sum - liv_cost);
        } else {
            console.log('earn more');
        }

    } else {
        console.log('Invalid input');
    }
}


monthly_saving([1000, 2000, 3000], 5000)///saving 400

monthly_saving([900, 2700, 3400], 10000)///earn more

monthly_saving(1000, [900, 2700, 3400]) ///invalid input