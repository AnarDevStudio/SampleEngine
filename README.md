# SampleEngine

A powerful JavaScript engine that extends PyUnity with new features and provides seamless JavaScript support for 3D game development.

## 🚀 Features

- **JavaScript Integration** - Write PyUnity applications in JavaScript with a clean, intuitive API
- **GameObject System** - Easy-to-use game object creation and management
- **Component-Based Architecture** - Add physics, rendering, and custom components to game objects
- **Real-time Updates** - Flexible update loop for dynamic scene manipulation
- **Transform Controls** - Full control over position, rotation, and scale
- **Scene Management** - Simple scene creation and execution

## 📦 Installation

```bash
npm install sample-engine
```

## 🎮 Quick Start

```javascript
import * as SampleEngine from 'SampleEngine/main'

// Create a new scene
var scene = SampleEngine.scene()

// Create a game object (cube)
var cube = SampleEngine.GameObject()

// Add components
cube.addComponent("rightbody")
cube.addComponent("meshrenderer")

// Set transform properties
cube.position = [0, 0, 0]
cube.rotation = [0, 0, 0]
cube.scale = [1, 1, 1]

// Update loop
SampleEngine.update(() => {
    cube.position += 1
})

// Add object to scene
scene.add(cube)

// Run the scene at 60 FPS
SampleEngine.run(scene, 60)
```

## 📚 API Reference

### Core Functions

| Function | Description |
|----------|-------------|
| `SampleEngine.scene()` | Creates and returns a new scene object |
| `SampleEngine.GameObject()` | Creates a new game object that can be added to the scene |
| `SampleEngine.update(callback)` | Registers a callback function that runs every frame |
| `SampleEngine.run(scene, fps)` | Starts the engine with the specified scene and frame rate |

### GameObject Methods

**`addComponent(componentName)`** - Adds a component to the game object

**Available Components:**
- `"rightbody"` - Physics rigid body component
- `"meshrenderer"` - Mesh rendering component

### Transform Properties

- **position**: `[x, y, z]` - Object position in 3D space
- **rotation**: `[x, y, z]` - Object rotation in degrees
- **scale**: `[x, y, z]` - Object scale factors

## 💡 Examples

### Creating a Rotating Cube

```javascript
import * as SampleEngine from 'SampleEngine/main'

var scene = SampleEngine.scene()
var cube = SampleEngine.GameObject()

cube.addComponent("rightbody")
cube.addComponent("meshrenderer")
cube.position = [0, 0, 0]

SampleEngine.update(() => {
    cube.rotation[1] += 1 // Rotate around Y axis
})

scene.add(cube)
SampleEngine.run(scene, 60)
```

### Multiple Objects

```javascript
import * as SampleEngine from 'SampleEngine/main'

var scene = SampleEngine.scene()

// Create floor
var floor = SampleEngine.GameObject()
floor.addComponent("meshrenderer")
floor.position = [0, -5, 0]
floor.scale = [10, 1, 10]

// Create moving cube
var cube = SampleEngine.GameObject()
cube.addComponent("rightbody")
cube.addComponent("meshrenderer")
cube.position = [0, 0, 0]

SampleEngine.update(() => {
    cube.position[0] += 0.1
})

scene.add(floor)
scene.add(cube)
SampleEngine.run(scene, 60)
```

## 📋 Requirements

- Node.js (version 14.x or higher)
- PyUnity (latest version)

## 📄 License

[Add your license information here]

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 💬 Support

For issues and questions, please open an issue on the GitHub repository.

---

**Built with ❤️ for game developers**
