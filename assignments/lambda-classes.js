// CODE here for your Lambda Classes

class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        this.gender = attr.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location} `);
    }
};

class Instructor extends Person {
    constructor(iAttr) {
        super(iAttr);
        this.specialty = iAttr.specialty;
        this.favLanguage = iAttr.favLanguage;
        this.catchPhrase = iAttr.catchPhrase;
    }

    demo(subject) {
        console.log(`${this.student} receives a perfect score on ${subject}`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
};

class Student extends Person {
    constructor(sAttr) {
        super(sAttr);
        this.previousBackground = sAttr.previousBackground;
        this.className = sAttr.className;
        this.favSubjects = sAttr.favSubjects;
    }

    listsSubjects(favoriteSubjects) {
        console.log(`${this.favoriteSubjects}`);
    }

    PRAssignment(subject) {
        console.log(`${this.student.name} has submitted a PR for ${subject}.`)
    }

    sprintChallenge(subject) {
        console.log(`${student.name} has begun sprint challenge on ${subject}.`)
    }
};

class ProjectManager extends Instructor {
    constructor(pAttr) {
        super(pAttr);
        this.gradClassName = pAttr.gradClassName;
        this.favInstructor = pAttr.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${this.channel}, @channel stand times!​​​​​`);
    }

    debugsCode(subject) {
        return(`${this.name} debugs ${student.name}/'s code on ${this.subject}`);
    }
};