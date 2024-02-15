const formatDate = (date) => {
    const options = {
        weekday: 'short',
        month: 'short',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
    };

    const timeZoneAbbreviation = /\(([^)]+)\)/.exec(date.toString())[1];
    const time = `${date.toLocaleString('en-US', options)} (${timeZoneAbbreviation})`;

    return time;
};

export default formatDate;
