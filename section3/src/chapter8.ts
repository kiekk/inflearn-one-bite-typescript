/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입
 */

type Admin = {
    name: string
    kickCount: number
}

type Member = {
    name: string
    point: number
}

type Guest = {
    name: string
    visitCount: number
}

type User = Admin | Member | Guest;

/*
하지만 이렇게 특정 property의 존재 여부로 타입을 판별하는 것은 직관적이지 못한 코드입니다.
 */
function login(user: User) {
    if ("kickCount" in user) {
        // Admin
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`)
    } else if ("point" in user) {
        // Member
        console.log(`${user.name}님 현재까지 ${user.point}모았습니다`)
    } else {
        // Guest
        console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`)
    }
}

// after
// property의 존재 여부보단
// property의 값을 통해 타입을 판별하는 것이 더 좋음
type Admin2 = {
    tag: "ADMIN"
    name: string
    kickCount: number
}

type Member2 = {
    tag: "MEMBER"
    name: string
    point: number
}

type Guest2 = {
    tag: "GUEST"
    name: string
    visitCount: number
}

type User2 = Admin2 | Member2 | Guest2;

function login2(user: User2) {
    if (user.tag === "ADMIN") {
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`)
    } else if (user.tag === "MEMBER") {
        console.log(`${user.name}님 현재까지 ${user.point}모았습니다`)
    } else {
        console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`)
    }
}