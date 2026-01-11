// physics.js (CommonJS)
class Rigidbody {
    constructor() {
        console.log("Rigidbody component created");
    }
}

class BoxCollider {
    constructor() {
        console.log("BoxCollider component created");
    }
}

module.exports = { Rigidbody };
