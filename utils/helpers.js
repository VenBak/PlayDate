module.exports = {
    format_date: (date) => {
        // Format date as MM/DD/YYYY
        return date.toLocaleDateString();
    },
    format_age_years: (age) => {
        const ageToYears = parseInt(age) / 12
        if (ageToYears < 1) {
            var ageinYears = Math.floor(ageToYears)
        } else {
            var ageinYears = Math.round(ageToYears)
        }
        return ageinYears
    },
    format_age_months: (age) => {
        const ageRemainderMonths = parseInt(age) % 12
        const ageMonths = Math.round(ageRemainderMonths)
        return ageMonths
    },
    ownsComment: (comment, user_id) => {
        return (comment.owner.id == user_id);
    },
    ownsDog: (dog, user_id) => {
        console.log(dog)
        console.log(user_id)
        return (dog.owner_id == user_id);
    }
};