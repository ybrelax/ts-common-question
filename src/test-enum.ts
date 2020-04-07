enum Gender {
    a = 1,
    b,
   // c = Gender.a,
    body = 'xx',
    girl = '1'
}

console.log(Gender.body);
console.log(Gender);

const enum Colors {
    Red,
    Yellow,
    Blue
}

console.log(Colors.Red, Colors.Yellow)


// 使用场景

enum Role {
    superAdmin,
    admin,
    normal
}

function switchRole(role: number) {
    switch(role) {
        case Role.superAdmin: // 1
         console.log('超级管理员');
         break;
         case Role.admin: //2
            console.log("管理员");
            break;
        default: 
            console.log('一般用户');
            break
    }
}

switchRole(1)

// 