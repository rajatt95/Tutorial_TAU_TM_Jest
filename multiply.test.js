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

const multiply = require('./multiply');

// describe - It is used to group the tests
describe('test multiply positive scenarios',()=>{

    test('multiply 3*2 equal to 6', ()=>{
        // Jest has its own Assertion library
        expect(multiply(3,2)).toBe(6);
    });

})

describe('test multiply negative scenarios',()=>{

    test('multiply 4*3 should not be equal to 11', ()=>{
        expect(multiply(4,3)).not.toBe(11);
    });

})


test('object example', ()=>{
    const data = {first: 1};
    data['second'] = 2;

    expect(data).toEqual({first:1, 'second':2}); 
    expect(data).toEqual({first:1, second:2}); 

});

