export class Rigidbody {
    constructor() {
        this.mass = 1;
    }

    getMass() {
        console.log("Its work, mass =", this.mass);
    }
}

export class CharacterController {}

export class Collider {}
export class BoxCollider extends Collider {}
export class SphereCollider extends Collider {}