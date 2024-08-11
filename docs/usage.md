# Usage

Now that you have the 3D Particle Emitter installed, let's actually use it. This guide will show you how to set up the emitter and adjust some basic properties to get you started. 

---

## **Setting Up the Particle Emitter**

First things first, you'll need to create a new script or add to an existing one where you want to use the 3D Particle Emitter.

Here’s how to set up the emitter:

```lua
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local ParticleEmitter3D = require(ReplicatedStorage:WaitForChild("ParticleEmitter3D"))

local part = workspace:WaitForChild("Part") -- Replace this line in your game where you want the particles to emit from, this can be either an attachment or a basepart
local emitter = ParticleEmitter3D.new(part)

emitter:Create({ -- Properties here
 
})
```

In this example, we're requiring the ParticleEmitter3D module and creating a new emitter attached to a part in your workspace. Make sure to replace `"Part"` with the actual name of the part you want to attach the emitter to.

---

## **Adding Basic Properties**

Once your emitter is set up, you can start customizing it with many properties. Here are some basic ones to get you started:

---

### **Rate**

The `Rate` property determines how many particles are emitted per second.

```lua
emitter:Create({ -- Emit 10 particles per second
    Rate = 10
})
```

---

### **Lifetime**

The `Lifetime` property controls how long each particle lives before disappearing. You can set this as a `NumberRange` to give particles a range of lifetimes, if you have a bit of scripting knowledge, then consider `NumberRange` how a `math.random()` works.

```lua
emitter:Create({ -- Particles live between 3 to 5 seconds
    Lifetime = NumberRange.new(3, 5)
})
```

---

### **Color**

The `Color` property allows you to set the color of the particles. You can use a `ColorSequence` to have particles change color over their lifetime.

```lua
emitter:Create({ -- Particles transition from red to yellow
    Color = ColorSequence.new(Color3.fromRGB(255, 0, 0), Color3.fromRGB(255, 255, 0))
})
```

For creating more extensive `ColorSequence`'s, you'll need to use `ColorSequenceKeypoint`, here is an example of how to do that:
```lua
emitter:Create({
	Color = ColorSequence.new({
		ColorSequenceKeypoint.new(0, Color3.fromRGB(255, 235, 156)),
		ColorSequenceKeypoint.new(0.25, Color3.fromRGB(110, 137, 255)),
		ColorSequenceKeypoint.new(0.5, Color3.fromRGB(46, 255, 203)),
		ColorSequenceKeypoint.new(0.75, Color3.fromRGB(255, 129, 131)),
		ColorSequenceKeypoint.new(1, Color3.fromRGB(237, 255, 210)),
	})
})
```

---

### **Combining Properties**

You can combine these properties and more to fine-tune the behavior of your particles:

```lua
emitter:Create({
    Rate = 15,
    Lifetime = NumberRange.new(2, 4),
    Color = ColorSequence.new(Color3.fromRGB(0, 255, 0), Color3.fromRGB(0, 0, 255)),
    Size = NumberSequence.new(1, 2)
})
```
So with that, a full script should look something like:
??? info "Expand"
    ```lua
    local ReplicatedStorage = game:GetService("ReplicatedStorage")
    local ParticleEmitter3D = require(ReplicatedStorage:WaitForChild("ParticleEmitter3D"))

    local part = workspace:WaitForChild("Part")
    local emitter = ParticleEmitter3D.new(part)

    emitter:Create({
        Rate = 15,
        Lifetime = NumberRange.new(2, 4),
        Color = ColorSequence.new(Color3.fromRGB(0, 255, 0), Color3.fromRGB(0, 0, 255)),
        Size = NumberSequence.new(1, 2)
    })
    ```


!!! note "Emitters begin enabled"
    All emitters created begin enabled. You'll have to put `Enabled = false` in the `Create({` section or `emitter:Stop()` at the end of the section outside of the brackets if you want the emitter to start disabled.

In this example, particles are emitted at a rate of 15 per second, live between 2 to 4 seconds, change color from green to blue, and grow in size over their lifetime.

---

## **Activating and Stopping the Emitter**

To start the particle emitter, use:

```lua
emitter:Start()
```
Or
```lua
emitter.enabled = true
```
It is recommended to use `emitter:Start()` when enabling a particle as it uses a preparation system before turning it on, making sure to minimize any possible crashes or feedback loops.

---

When you want to stop emitting particles, simply use:

```lua
emitter:Stop()
```
Or
```lua
emitter.enabled = false
```
`emitter:Stop()` and `emitter.enabled = false` have no difference, you can use either freely.

---

When you want to destroy the emitter and remove all particles, use:

```lua
emitter:Destroy()
```

`emitter:Destroy()` will only destroy particles and stop emitting them, you can use `emitter:Start()` to start the same emitter again.

## **Useful things to know**

All properties of emitters can be modified from any script when using `GetEmitterFromID` or anywhere in a script where the emitter is created, the only requirement is that the emitter has those properties used, for example;
It is not possible to change the `SpreadAngle` of the emitters if `SpreadAngle` is not used in the `emitter:Create({` table.



---

And that's all for usage, this should give you a good starting point to experiment and create different effects. For more advanced properties and customizations, go to the properties section of the documentation.