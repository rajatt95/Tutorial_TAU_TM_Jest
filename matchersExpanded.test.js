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

test('Number matchers - multiply 3*2 equal to 6', ()=>{
    expect(multiply(3,2)).toBe(6);
    expect(multiply(3,2)).toBeGreaterThan(5);
    expect(multiply(3,2)).toBeLessThan(7);
    expect(multiply(3,2)).toBeLessThanOrEqual(6);
});

test('String Matcher - there is a pool in Liverpool', ()=>{
    expect('Liverpool').toMatch(/pool/);
});


test('Truthiness Matcher - null', ()=>{
    const n = null;

    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();

});


test('Arary Matcher - the car stock list has a Ferrari', ()=>{
    const carStock = [
        'BMW',
        'Mercedes',
        'Ferrari',
        'Toyota '
    ];

    expect(carStock).toContain('Ferrari');
    
});

