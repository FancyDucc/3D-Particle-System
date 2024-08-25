<p align="center">
  <img src="docs/images/3DPS%20Logo.png" alt="Logo" width="600">
</p>

</a>
<h1 align="center">3D Particle Emitter System for Roblox</h1>
<p align="center">
<a align="center">Current Version: 1.0.3 - Gun</a>
<br/>
<br/>
<a href="https://fancyducc.github.io/3D-Particle-System/getting-started/" target="_blank"><strong>See the official documentation</strong></a>
<br/>
<br/>
<a href="https://fancyducc.github.io/3D-Particle-System/reportbugrequest/" target="_blank">Report Bug or Request feature</a>
</p>
</div>

A powerful and flexible 3D particle system for Roblox, having advanced features and customization options for every occasion, this is a versatile system when plenty of properties, every 2D property that is possible to be ported to 3D has been ported into this system, as well as a LOT of other properties that can be useful.

It is highly recommended to use the provided [documentation](https://fancyducc.github.io/3D-Particle-System/getting-started/) instead of this README.md, as it covers every single property

## Features

- 3D particle simulation
- Versatile property customization
- Audio reactions
- Light influence and emission
- Collision detection and collision physics
- Trajectory control
- Instability and randomness
- Functions and events
- Debug visualization

## Installation

1. Get the [3D Particle Emitter module](https://create.roblox.com/store/asset/89242445503292) from the Roblox library or download it from the [documentation](https://fancyducc.github.io/3D-Particle-System/installation/).
2. Add the module into your game, preferably in `ReplicatedStorage`.
3. Make sure you have the [PartCache module](https://devforum.roblox.com/t/objectcache-a-modern-blazing-fast-model-and-part-cache/3104112) installed as well.

## Usage

```lua
local ParticleEmitter3D = require(path.to.ParticleEmitter3D)

local emitter = ParticleEmitter3D.new(adornee)
emitter:Create({
    -- Place particle properties here
})
emitter:Start()
```

## Useful and Key Properties

- Basic: `Rate`, `Lifetime`, `Speed`, `Color`, `Size`, `Transparency`
- Advanced: `Acceleration`, `Drag`, `SpreadAngle`, `FaceVelocity`
- Audio: `AudioReactive`, `AudioInfluencedColor`, `AudioInfluencedSpeed`, `AudioInfluencedSize`
- Light: `LightInfluenceEnabled`, `LightColorInfluence`, `LightBrightnessInfluence`
- Collision: `EnableCollision`, `ParticlesAreSolid`, `OnCollision`
- Trajectory: `TrajectorialVertices`, `TrajectorialSmoothening`
- Instability: `Instability`, `InstabilityIntensity`
- Events: `OnSpawn`, `OnDeath`, `HalfLife`, `ConstantFunction`

## Templates

Pre-configured templates are available for quick setup:

- Bouncy Balls
- Fireflies
- Falling Leaves
- Gun
- Audio Orbs
- Audio Waveform
- Fireworks

## Documentation

For much more information on properties, usage, and examples, go to the [official documentation](https://fancyducc.github.io/3D-Particle-System/getting-started/).

## Bug Reports and Feature Requests

Please report any bugs or send feature requests through the [reporting system in the documentation](https://github.com/yourusername/3D-Particle-System/issues). All reports and suggestions are sent directly to me, so you can almost always expect a response.

## License

This project is licensed under a [Custom Provision License](https://fancyducc.github.io/3D-Particle-System/customprovisionlicense/). Please read the license terms before using this system in your projects to be aware of what you can and can't do.

## Credits

Created entirely by Aeresei/Fancy Ducc

Special thanks to the Roblox developer community for their support and feedback.
