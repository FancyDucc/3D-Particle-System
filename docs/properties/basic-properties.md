# Basic Properties

The system comes with many properties that you can adjust to create particle effects. Below are the basic properties that you can change.

## **Enabled**

- **Description:** Control's whether the particles are emitting or not.
- **Default:** `true`
- **Example:**
  ```lua
  emitter:Create({ -- Particles will emit
      Enabled = true
  })
  ```

For starting and stopping an emitter outside of the `Create({` function, use:
```lua
local emitter = require(game:GetService("ReplicatedStorage").ParticleEmitter3D)

emitter:Start()
emitter:Stop()
emitter:Kill()

```

## **Acceleration**

- **Description:** Controls the acceleration applied to particles, allowing them to speed up or slow down over time.
- **Default:** `Vector3.new(0, 0, 0)`
- **Example:**
  ```lua
  emitter:Create({ -- Particles will accelerate downward like gravity
      Acceleration = Vector3.new(0, -10, 0)
  })
  ```

<video width="600" controls>
  <source src="../../media/Acceleration.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## **Color**

- **Description:** Sets the color of the particles. You can also use `ColorSequence` or `ColorSequenceKeypoint` to make particles change color over their lifetime.
- **Default:** `Color3.fromRGB(255, 255, 255)`
- **Example:**
  ```lua
  emitter:Create({ -- Particles transition from red to yellow
      Color = ColorSequence.new(Color3.fromRGB(255, 0, 0), Color3.fromRGB(255, 255, 0))
  })
  ```
  ```lua
  emitter:Create({ -- Particles transition from yellow to blue to green to red to white
      Color = ColorSequence.new({
		ColorSequenceKeypoint.new(0, Color3.fromRGB(255, 235, 156)),
		ColorSequenceKeypoint.new(0.25, Color3.fromRGB(110, 137, 255)),
		ColorSequenceKeypoint.new(0.5, Color3.fromRGB(46, 255, 203)),
		ColorSequenceKeypoint.new(0.75, Color3.fromRGB(255, 129, 131)),
		ColorSequenceKeypoint.new(1, Color3.fromRGB(255, 255, 255)),
	})
  })
  ```

## **Drag**

- **Description:** Applies drag to the particles, slowing them down over time.
- **Default:** `0`
- **Example:**
  ```lua
  emitter:Create({ -- Particles will gradually slow down as they move
      Drag = 0.5
  })
  ```

<video width="600" controls>
  <source src="../../media/Drag.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## **EmissionDirection**

- **Description:** Control's which direction the particles emit from the emitter.
- **Default:** `Enum.NormalId.Top`
- **Example:**
  ```lua
  emitter:Create({ -- Particles will emit right from the emitter
      EmissionDirection = Enum.NormalId.Right
  })
  ```

<video width="600" controls>
  <source src="../../media/EmissionDirection.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## **Lifetime**

- **Description:** Defines how long particles will live before disappearing. This can be set as a `NumberRange` for varied lifetimes or `Single` for determined lifetime.
- **Default:** `NumberRange.new(5, 10)`
- **Example:**
  ```lua
  emitter:Create({ -- Particles live between 3 to 5 seconds
      Lifetime = NumberRange.new(3, 5)
  })
  ```
  ```lua
  emitter:Create({ -- Particles live for 5 seconds
      Lifetime = 5
  })
  ```

## **Shape**

- **Description:** The shape of each particle when not using `ReferenceObject`
- **Default:** `Enum.PartType.Block`
- **Example:**
  ```lua
  emitter:Create({ -- Particles will emit as spheres
      Shape = Enum.PartType.Ball
  })
  ```

<video width="600" controls>
  <source src="../../media/Shape.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## **Material**

- **Description:** The material of each particle when not using `ReferenceObject`
- **Default:** `Enum.Material.SmoothPlastic`
- **Example:**
  ```lua
  emitter:Create({ -- Particles will glow
      Material = Enum.Material.Neon
  })
  ```

<video width="600" controls>
  <source src="../../media/Material.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## **Rate**

- **Description:** Determines how many particles are emitted per second.
- **Default:** `5`
- **Example:**
  ```lua
  emitter:Create({ -- Emit 10 particles per second
      Rate = 10
  })
  ```

!!! warning "High rate count"

    It is not a good idea to go above 60 rate without a short lifetime or in bursts, as this can lag a client or the server, depending on what you run it on.

## **Rotation**

- **Description:** Sets the initial rotation of the particles.
- **Default:** `Vector3.new(0, 0, 0)`
- **Example:**
  ```lua
  emitter:Create({ -- Particles start with a 45 degree rotation on the Y-axis and Z-axis
      Rotation = Vector3.new(0, 45, 45)
  })
  ```
  ```lua
  emitter:Create({ -- Particles randomize all axes fully
      Rotation = {NumberRange.new(-360, 360), NumberRange.new(-360, 360), NumberRange.new(-360, 360)}
  })
  ```

<video width="600" controls>
  <source src="../../media/Rotation.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## **RotationSpeed**

!!! warning "X axis warning"
    The X axis in RotationSpeed is notorious for causing issues, I've researched far far into this and this is a problem with the way Roblox handles adding rotation, if possible, avoid high numbers of the X axis, this is on Roblox, I can't fix this :/mk

- **Description:** Defines the speed at which particles rotate over their lifetime.
- **Default:** `Vector3.new(0, 0, 0)`
- **Example:**
  ```lua
  emitter:Create({ -- Particles rotate at 10 degrees per second around the Y-axis
      RotationSpeed = Vector3.new(0, 10, 0)
  })
  ```
  ```lua
  emitter:Create({ -- Particles rotate between -20 and 20 degrees per second around Y and Z axes
      Rotation = {0, NumberRange.new(-20, 20), NumberRange.new(-20, 20)}
  })
  ```

<video width="600" controls>
  <source src="../../media/RotationSpeed.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## **Size**

- **Description:** Sets the size of the particles. You can use `NumberSequence` or `NumberSequenceKeypoint` to make particles grow or shrink over time.
- **Default:** `NumberSequence.new(1)`
- **Example:**
  ```lua
  emitter:Create({ -- Particles grow in size from 1 to 2 over their lifetime
      Size = NumberSequence.new(1, 2)
  })
  ```
  ```lua
  emitter:Create({ -- Particles grow and shrink in size over their lifetime
	Size = NumberSequence.new({
		NumberSequenceKeypoint.new(0, 1.25),
		NumberSequenceKeypoint.new(0.25, 0.4),
		NumberSequenceKeypoint.new(0.5, 1.3),
		NumberSequenceKeypoint.new(0.75, 2),
		NumberSequenceKeypoint.new(1, 0),
	})
  })
  ```

## **Speed**

- **Description:** Controls the speed at which particles are emitted.
- **Default:** `NumberRange.new(5)`
- **Example:**
  ```lua
  emitter:Create({ -- Particles emit with a random speed between 5 and 10
      Speed = NumberRange.new(5, 10)
  })
  ```

## **SpreadAngle**

- **Description:** Determines the angle at which particles are emitted at X and Z values, giving you more directional control.
- **Default:** `Vector2.new(0, 0)`
- **Example:**
  ```lua
  emitter:Create({ -- Particles spread at angles between 15 and 30 degrees
      SpreadAngle = Vector2.new(15, 30)
  })
  ```

<video width="600" controls>
  <source src="../../media/SpreadAngle.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## **Transparency**

- **Description:** Sets the transparency of the particles. You can use `NumberSequence` or `NumberSequenceKeypoint` to change transparency over time.
- **Default:** `NumberSequence.new(0)`
- **Example:**
  ```lua
  emitter:Create({ -- Particles fade out over their whole lifetime
      Transparency = NumberSequence.new(0, 1) 
  })
  ```
  ```lua
  emitter:Create({ -- Particles flicker on and off over their whole lifetime
	Transparency = NumberSequence.new({
		NumberSequenceKeypoint.new(0, 0),
		NumberSequenceKeypoint.new(0.25, 1),
		NumberSequenceKeypoint.new(0.5, 0),
		NumberSequenceKeypoint.new(0.75, 1),
		NumberSequenceKeypoint.new(1, 0),
	})
  })
  ```

---

These are the basic properties you can tweak to get started with the 3D Particle Emitter.