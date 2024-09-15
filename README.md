</div>
<div align=center>
  
*Current Version: 1.0.55 - Pure Performance*

<img src="docs/images/VortexFXIcon.png" alt="Logo" width="800">

### [Github](https://github.com/FancyDucc/3D-Particle-System) - [Documentation](https://fancyducc.github.io/3D-Particle-System/getting-started/) - [Creator Hub](https://create.roblox.com/store/asset/89242445503292) - [DevForum](https://devforum.roblox.com/t/vortexfx-v1055-a-3d-particle-system-for-all-your-3d-particle-needs/3131414)

# **Introduction**

**Hello Developers and welcome to the VortexFX DevForum post!**

VortexFX is highly versatile and optimized to a good degree, this system contains every capable property that regular 2D particles contain, but many MANY more features and additions, such as smart collision for each particle that allows bouncing particles or particles that move out of the way of players, like bouncy balls or fire flies

You can change every single property to your hearts content, as each property has been stress tested with pairing of other properties, including emitters that have no other properties.

# Expectations

VortexFX is a 3D Particle system that is subjectively better than the other 3D particle systems you'll find around in the DevForum.

### **Model Emission**: 
VortexFX is completely compatible with emitting Models and MeshParts, every single property should be fully working with Models and MeshParts, if not, **please** let me know here or using [the report feature in the documentation.](https://fancyducc.github.io/3D-Particle-System/reportbugrequest/#report-an-issue-or-request-a-feature)

### **Collision Detection**: 
Particles don't need to just float through everything. They can bounce off surfaces, avoid obstacles, or even react to players and the environment. Imagine fireflies moving around players or debris realistically bouncing off the ground.

### **React to Sound**: 
Particles can sync up with audio, responding to the loudness or beat of your music or sounds, which is perfect for things like rhythm games or musical environments, VortexFX audio implementation is unmatched with other systems, while color, speed, and size can be found across the DevForum, VortexFX includes independency and automatic beat detection (A way that VortexFX tries to find out when a beat happens in the audio if you're using music.)

### **Trajectorial Paths**:
This lets particles follow specific paths. You can create effects like a stream of particles flowing along a river or fireflies following a smooth, pre-determined flight path around an area. Or if you really know how to use it, you can simulate orbit or a black hole.

### **Interaction with the environment**: 
VortexFX is fully integrated into 3D space and the environment. Particles can be affected by wind, inherit velocity from moving objects, or follow custom paths, making them feel like a natural part of your environment.

### **Instability**: 
You can add some randomness to your particles with the instability feature, which gives particles a jittery, natural look. Perfect for effects like flickering fire, smoke, or anything that shouldn’t look perfectly smooth.

### **Flipbooks**: 
Add animated textures to your particles using flipbook animations. This lets you create effects like swirling smoke, evolving magical orbs, or any animation that needs to play out across multiple frames.

## Installation

<div align=left>

1. Get [VortexFX](https://create.roblox.com/store/asset/89242445503292) from the Roblox library or download it from the [documentation](https://fancyducc.github.io/3D-Particle-System/installation/).
2. Add the module into your game, preferably in ReplicatedStorage.
3. Make sure you have the [ObjectCache module](https://devforum.roblox.com/t/objectcache-a-modern-blazing-fast-model-and-part-cache/3104112) installed as well, you don't fully need to worry about this as it comes preinstalled with the module.
<div align=center>
  
## Usage
<div align=left>

```lua
local ParticleEmitter3D = require(path.to.ParticleEmitter3D)

local emitter = ParticleEmitter3D.new(adornee)
emitter:Create({
    -- Place particle properties here
})
emitter:Start()
```
<div align=center>

#  Documentation
This system has it's own full documentation where you can see tutorials, examples, how to use every property, and even a few free templates to use.
### Visit the documentation [here](https://fancyducc.github.io/3D-Particle-System/getting-started/)

# Installation
To install the system and use it for yourself, head to the [documentation installation page](https://fancyducc.github.io/3D-Particle-System/installation/) or go to the [Roblox Creator Hub](https://create.roblox.com/store/asset/89242445503292/ParticleEmitter3D-V102a), both work perfectly fine for setup.
Once you've downloaded or gotten the module, head into a studio game and drag and drop the module into the game from the Toolbar or from your File Explorer into the studio viewport.
After you have it in your game, simply drag it into ReplicatedStorage, or ServerScriptService.

Keep in mind the module is strongly recommended to be used in ReplicatedStorage and for all particles to be client-sided, as running mass amounts of particles on the server can lag the game for all players.

# Q&A
This Q&A will expand the longer this page is up, as for now there are a few questions I've received while testing.

### Q: What can I expect from using VortexFX
A: You can expect to have more interactive particles than pretty looking, this system has plenty of uses, but more of the properties and ways you'll end up using this are for interaction with the world.

### Q: What would this be used for in a regular game
A: I've gotten this question a few times, and I can say that this system is in no way meant to replace 2D particles, as 2D particles look better on occasion and are much more performant, as for what you would use it for, it would probably be used for an extra effect, like when a player destroys an object, 3D particles could emit.
The things you can use this system for are limitless, it just matters what your imagination can think up.

### Q: How optimized is this?
A: I've spent hours, hours, and a few more hours optimizing this system as much as I could without making it look bad, there are a few spikes here and there when lots of particles, but the only time you'll be using hundreds of particles is quite rare.

# That's all folks
This page will continue to expand with more features, properties, Q&A, and much more the longer it exists, I'll try to respond to every request and issue in this post, however if you really want a guaranteed response, [write a report in the documentation.](https://fancyducc.github.io/3D-Particle-System/reportbugrequest/#report-an-issue-or-request-a-feature)

## *License*

*This project is licensed under a [Custom Provision License](https://fancyducc.github.io/3D-Particle-System/customprovisionlicense/). Please read the license terms before using this system in your projects to be aware of what you can and can't do.*

<div align=left>

---

**Created entirely by Aeresei/Fancy Ducc**

**Special thanks to the Roblox developer community for their support and feedback.**
