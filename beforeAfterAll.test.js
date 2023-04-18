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

const setup = () => console.log('Setting up before tests run')
const tearDown = () => console.log('Finishing up after tests run')

describe('new account creations checks',()=>{

    // This will run once before test cases
    beforeAll(()=> setup());

    // This will run once after test cases
    afterAll(()=> tearDown());

    test('new account 1 created', ()=>{
        const account = 'account1'
        expect(account).toEqual('account1')
    });

    test('new account 2 created', ()=>{
        const account = 'account2'
        expect(account).toEqual('account2')
    });

})
