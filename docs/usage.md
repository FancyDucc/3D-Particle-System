# Usage

Now that you have the 3D Particle Emitter installed, let's actually use it. This guide will show you how to set up the emitter and adjust some basic properties to get you started. 

## **Setting Up the Particle Emitter**

First things first, you'll need to create a new script or add to an existing one where you want to use the 3D Particle Emitter.

Here’s how to set up the emitter:

```lua
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local ParticleEmitter3D = require(ReplicatedStorage:WaitForChild("ParticleEmitter3D"))

local part = workspace:WaitForChild("Part") -- Replace this line in your game where you want the particles to emit from, this can be either an attachment or a basepart
local emitter = ParticleEmitter3D.new(part)

emitter:Create({
    -- Properties here
})
```

In this example, we're requiring the ParticleEmitter3D module and creating a new emitter attached to a part in your workspace. Make sure to replace `"Part"` with the actual name of the part you want to attach the emitter to.

## **Adding Basic Properties**

Once your emitter is set up, you can start customizing it with many properties. Here are some basic ones to get you started:

### **Rate**

The `Rate` property determines how many particles are emitted per second.

```lua
emitter:Create({
    Rate = 10 -- Emit 10 particles per second
})
```

### **Lifetime**

The `Lifetime` property controls how long each particle lives before disappearing. You can set this as a `NumberRange` to give particles a range of lifetimes, if you have a bit of scripting knowledge, then consider `NumberRange` how a `math.random()` works.

```lua
emitter:Create({
    Lifetime = NumberRange.new(3, 5) -- Particles live between 3 to 5 seconds
})
```

### **Color**

The `Color` property allows you to set the color of the particles. You can use a `ColorSequence` to have particles change color over their lifetime.

```lua
emitter:Create({
    Color = ColorSequence.new(Color3.fromRGB(255, 0, 0), Color3.fromRGB(255, 255, 0)) -- Particles transition from red to yellow
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


### **Combining Properties**

You can combine these properties and more to fine-tune the behavior of your particles:

```lua
emitter:Create({
    Rate = 15,
    Lifetime = NumberRange.new(2, 4),
    Color = ColorSequence.new(Color3.fromRGB(0, 255, 0), Color3.fromRGB(0, 0, 255)),
    Size = NumberSequence.new(1, 2) -- Particles grow in size over time
})
```

In this example, particles are emitted at a rate of 15 per second, live between 2 to 4 seconds, change color from green to blue, and grow in size over their lifetime.

## **Activating and Stopping the Emitter**

To start the particle emitter, use:

```lua
emitter:Start()
```

When you want to stop emitting particles, simply use:

```lua
emitter:Stop()
```

When you want to destroy the emitter and remove all particles, use:

```lua
emitter:Destroy()
```

`emitter:Destroy()` will only destroy particles and stop emitting them, you can use `emitter:Start()` to start the same emitter again.

And that's all for usage, this should give you a good starting point to experiment and create different effects. For more advanced properties and customizations, go to the properties section of the documentation.