const { Rigidbody } = require('./physics.js');
const { GetPY } = require('./getpy.js');
const crypto = require('crypto');


const COMPONENTS = { Rigidbody };

class GameObject {
    #id = crypto.randomUUID();
    components = [];

    constructor(name = "Object") {
        this.name = name;
    }

    /**
     * Unity-style component adding
     * @param {Function|string} ComponentClass
     */
    addComponent(ComponentClass) {
        // Eğer string verilmişse registry'den class referansını al
        if (typeof ComponentClass === "string") {
            const cls = COMPONENTS[ComponentClass];
            if (!cls) throw new Error(`Component '${ComponentClass}' not found`);
            ComponentClass = cls;
        }

        const instance = new ComponentClass();
        this.components.push(instance);

        this[ComponentClass.name] = instance;

        GetPY("../pyunity/test.py", "add", [3,2], (err, res) => {
            if (err) console.error("Python error:", err);
            else console.log("Python result:", res);
        });

        return instance;
    }

    /**
     * @param {Function|string} ComponentClass
     */
    getComponent(ComponentClass) {
        if (typeof ComponentClass === "string") {
            ComponentClass = COMPONENTS[ComponentClass];
            if (!ComponentClass) throw new Error(`Component '${ComponentClass}' not found`);
        }

        return this.components.find(c => c instanceof ComponentClass);
    }

    /**
     * @param {Function|string} ComponentClass
     */
    removeComponent(ComponentClass) {
        if (typeof ComponentClass === "string") {
            ComponentClass = COMPONENTS[ComponentClass];
            if (!ComponentClass) throw new Error(`Component '${ComponentClass}' not found`);
        }

        this.components = this.components.filter(c => !(c instanceof ComponentClass));
        delete this[ComponentClass.name];
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.#id;
    }
}


const object = new GameObject();
object.addComponent(Rigidbody); 
