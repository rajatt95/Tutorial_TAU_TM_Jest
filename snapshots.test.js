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

var itemStock = [
    {'Id':1, 'ItemName': 'Socks', 'Stock':10},
    {'Id':2, 'ItemName': 'Towel', 'Stock':1},
    {'Id':3, 'ItemName': 'Socks', 'Stock':100},
    {'Id':4, 'ItemName': 'Hankey', 'Stock':1000},
];

function filterItemStock(arr, key, term){
    return arr.filter(function(obj){
        return obj[key] ===term
    });
}

test('it returns all items with matching Id', ()=>{
    expect(filterItemStock(itemStock,'Id',1)).toEqual([
        {'Id':1, 'ItemName': 'Socks', 'Stock':10}
    ])
});

test('it returns all items with matching Item name', ()=>{
    expect(filterItemStock(itemStock,'ItemName','Socks')).toEqual([
        {'Id':1, 'ItemName': 'Socks', 'Stock':10},
        {'Id':3, 'ItemName': 'Socks', 'Stock':100},
    ])
});

 // Snapshots
 test('it returns all items with matching Id', ()=>{
    expect(filterItemStock(itemStock,'Id',1)).toMatchSnapshot()
 });
 
 test('it returns all items with matching Item name', ()=>{
    expect(filterItemStock(itemStock,'ItemName','Socks')).toMatchSnapshot()
});

