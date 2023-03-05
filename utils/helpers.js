module.exports = {
    format_date: (date) => {
        // Format date as MM/DD/YYYY
        return date.toLocaleDateString();
    },
    format_age_years: (age) => {
        const ageToYears = parseInt(age) / 12
        const ageinYears = Math.round(ageToYears)
        return ageinYears
    },
    format_age_months: (age) => {
        const ageRemainderMonths = parseInt(age) % 12
        const ageMonths = Math.round(ageRemainderMonths)
        return ageMonths
    }
};