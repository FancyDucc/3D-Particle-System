# Particle Commands

The system allows you to change and modify particles directly using a list of given commands and functions

---

## **Start**

- **Description:** Will start the emitter
- **Example:**
  ```lua
  local VortexFXParticles = require(game:GetService("ReplicatedStorage").VortexFXParticles)
  local emitter = VortexFXParticles.new()
  emitter:Create({})

  emitter:Start()
  ```

---

## **Stop**

- **Description:** Will stop the emitter from emitting particles
- **Example:**
  ```lua
  local VortexFXParticles = require(game:GetService("ReplicatedStorage").VortexFXParticles)
  local emitter = VortexFXParticles.new()
  emitter:Create({})

  emitter:Stop()
  ```

---

## **Kill**

- **Description:** Will stop the emitter from emitting particles and remove all particles that are active and from that emitter
- **Example:**
  ```lua
  local VortexFXParticles = require(game:GetService("ReplicatedStorage").VortexFXParticles)
  local emitter = VortexFXParticles.new()
  emitter:Create({})

  emitter:Kill()
  ```

---

## **FreezeParticle**

- **Description:** The function can be called on a certain particle object to freeze it in place, transparency, colors, and other properties will still take effect.
- **Example:**
  ```lua
  -- Will feeeze a particle, stopping its velocity and rotation to where it last was
  local VortexFXParticles = require(game:GetService("ReplicatedStorage").VortexFXParticles)
  VortexFXParticles:FreezeParticle(particle)
  ```

---

## **UnfreezeParticle**

- **Description:** The function can be called on a certain particle object to resume it's frozen state, resuming position and rotation, not inherting velocity from when it was last active.
- **Example:**
  ```lua
  -- Will unfreeze a particle, resuming its velocity and rotation
  local VortexFXParticles = require(game:GetService("ReplicatedStorage").VortexFXParticles)
  VortexFXParticles:UnfreezeParticle(particle)
  ```
  
---

## **GetActiveParticlesCount**

- **Description:** The function can be called to get the amount of particles that are active and being updated.
- **Example:**
  ```lua
  -- Will return the amount of particles currently active in the entire world
  local VortexFXParticles = require(game:GetService("ReplicatedStorage").VortexFXParticles)
  local particleCount = VortexFXParticles:GetActiveParticlesCount()
  ```
  
---

## **ChangeParticleProperty**

- **Description:** The function can be called on a certain particle object to change any of it's properties that exist on that particle alone, this excludes EnableCollision, AudioReactive, and other properties as they are not independent to particles, properties like Size or Transparency will work.
- **Example:**
  ```lua
  -- Will change the particles size to 5
  local VortexFXParticles = require(game:GetService("ReplicatedStorage").VortexFXParticles)
  VortexFXParticles:ChangeParticleProperty(particle, Size, 5)
  ```
  
---

## **DestroyParticle**

- **Description:** The function can be called to destroy a certain particle.
- **Example:**
  ```lua
  local VortexFXParticles = require(game:GetService("ReplicatedStorage").VortexFXParticles)
  VortexFXParticles:DestroyParticle(particle)
  ```
  
---

## **SetParticlePosition**

- **Description:** The function can be called to instantly set the position of any particle object to a `Vector3`.
- **Example:**
  ```lua
  -- Will set the position of the particle to 0, 10, 0
  local VortexFXParticles = require(game:GetService("ReplicatedStorage").VortexFXParticles)
  VortexFXParticles:SetParticlePosition(particle, Vector3.new(0, 10, 0))
  ```
  
---

## **SetParticleOrientation**

- **Description:** The function can be called to instantly set the orientation of any particle object to a `Vector3`.
- **Example:**
  ```lua
  -- Will set the rotation/orientation of a particle to 45 degrees on the X and Z axis
  local VortexFXParticles = require(game:GetService("ReplicatedStorage").VortexFXParticles)
  VortexFXParticles:SetParticleOrientation(particle, Vector3.new(45, 0, 45))
  ```
  
---

## **ResetRotation**

- **Description:** The function can be called to reset specific or multiple axes of a particle's rotation, followed with an option to smoothly fade in a particle's rotation.
- **Example:**
  ```lua
  -- Will reset the X, and Z rotation with a smooth fade in.
  local VortexFXParticles = require(game:GetService("ReplicatedStorage").VortexFXParticles)
  VortexFXParticles:ResetRotation(particle, true, false, true, true)
  ```
  
---

These commands give you much more control over what you can do with particles, keep in mind it requires a particles PART, or the objects inside of workspace > VortexFXCache while the game is running.