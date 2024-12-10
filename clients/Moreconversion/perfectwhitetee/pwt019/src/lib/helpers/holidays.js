const isTodayHoliday = () => {
    const holidays = [
        '2024-01-01', //New Year's Day
        '2024-01-20', //Martin Luther King Jr. Day
        '2024-02-17', //Washington's Birthday (Presidents Day)
        '2024-05-26', //Memorial Day
        '2024-07-04', //Independence Day
        '2024-09-02', //Labor Day
        '2024-10-13', //Columbus Day
        '2024-11-11', //Veterans Day
        '2024-11-28', //Thanksgiving Day
        '2024-12-25' //Christmas Day
    ];

    const today = new Date().toISOString().split('T')[0];
    return holidays.includes(today);
};

export default isTodayHoliday;
