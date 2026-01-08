import { Rigidbody } from "./physics.js";
import { spawnSync } from "node:child_process";


export default class GameObject {
    #id = crypto.randomUUID();
    components = [];

    constructor(name = "Object") {
        this.name = name;
    }

    /**
     * Unity-style component adding
     * @param {Function} ComponentClass
     */
    addComponent(ComponentClass) {
        const instance = new ComponentClass();
        this.components.push(instance);

        // shortcut: man.Rigidbody
        this[ComponentClass.name] = instance;

        return instance;
    }

    /**
     * @param {Function} ComponentClass
     */
    getComponent(ComponentClass) {
        return this.components.find(c => c instanceof ComponentClass);
    }

    /**
     * @param {Function} ComponentClass
     */
    removeComponent(ComponentClass) {
        this.components = this.components.filter(
            c => !(c instanceof ComponentClass)
        );
        delete this[ComponentClass.name];
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.#id;
    }
}


