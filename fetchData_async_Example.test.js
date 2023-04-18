/**
# * @author Rajat Verma
# * Email: rajatvermaa95@gmail.com
# * Github Profile: https://github.com/rajatt95
# * Github Page: https://rajatt95.github.io/
# * LinkedIn: https://www.linkedin.com/in/rajatt95/
# * Topmate: https://topmate.io/rajatt95
# * Telegram: https://t.me/rajatt95
# * Instagram: https://www.instagram.com/rajattvermaa95/
# * Youtube: https://www.youtube.com/@rajatt95
# * WhatsApp: https://chat.whatsapp.com/DVRP0ViD0YwELUKF2XMJHy
#
# ***********************************
# * Course: Jest JavaScript Testing Framework (https://testautomationu.applitools.com/jest-testing-tutorial/)
# * Tutor: Toyer Mamoojee (https://testautomationu.applitools.com/instructors/toyer_mamoojee.html)
# ***********************************
#
# * Code Repository: https://github.com/rajatt95/Tutorial_TAU_TM_Jest
# * Document(s): https://github.com/rajatt95/Documents
#
# ***********************************
# * Learnings from Tutor (Code Repository):
# *    This course
# *        https://github.com/stars/rajatt95/lists/tau-tm-jest
# *    Other course(s):
# *        https://github.com/stars/rajatt95/lists/tau-toyer-mamoojee
# *
# ***********************************/

const fetchDataOverApi = require('./fetchData.js');

// Non-Async Example
test('User Data for User 1', ()=>{
    const data = fetchDataOverApi();
    expect(data).toBe('https://www.youtube.com/@rajatt95')
});


// Async Example
test('User Data for User 1', async()=>{
    const data = await fetchDataOverApi();
    expect(data).toBe('https://www.youtube.com/@rajatt95')
});