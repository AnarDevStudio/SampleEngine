/**
 * GameObject: A generic object in the game that can hold multiple components.
*/

/**
 * @typedef {"SpriteRenderer" | "MeshRenderer"} ComponentType
 */

export default class GameObject {
    #id;
    components = [];

    constructor(name) {
        this.#id = crypto.randomUUID();

        if (!name || name === "") {
            name = "Object-" + crypto.randomUUID().slice(0, 8);
        }
        this.name = name;
    }

    /**
     * @param {ComponentType} type
     */

    addComponent(type) {
        let instance;

        switch (type.toLowerCase()) {
            case "SpriteRenderer":
                // instance = new SpriteRenderer();
                instance = "SpriteRenderer"
                break;
            case "MeshRenderer":
                //instance = new MeshRenderer;
                instance = "MeshRenderer"
                break;
            case "Camera":
                //instance = Camera()
                instance = "Camera"
                break;
            case "Light":
                //instance = new Light()
                instance = "Light"
                break;
            case "AudioSource":
                //instance = new AudioSource()
                instance = "Light"
                break;
            default:
                console.error("There is not a component for:", type);
                return;
        }

        this.components.push(instance);
    }

    getComponent(type) {
        const comp = this.components.find(c => c.constructor.name.toLowerCase() === type.toLowerCase());
        console.log(comp);
        return comp;
    }

    removeComponent(type) {
        const index = this.components.findIndex(c => c.constructor.name.toLowerCase() === type.toLowerCase());
        if (index !== -1) this.components.splice(index, 1);
    }

    getName() {
        console.log(this.name);
    }

    getId() {
        console.log(this.#id); 
    }
}




