# Advanced Properties

Oh? Basic properties aren't enough for you? Fine.

The system has many other properties that you can use to have even more control and flexibility over particle effects. These properties let you fine-tune stuff and visual effects that go beyond the basics.

---

## **ReferenceObject**

- **Description:** Specifies a part or model (yes you heard that right, model) that particles will reference during their lifetime. This is useful for creating effects that follow a specific object.
- **Default:** `nil`
- **Example:**
  ```lua
  local reference = workspace:WaitForChild("Part") -- Replace with a part or model
  emitter:Create({ -- Particles will reference this object
      ReferenceObject = reference
  })
  ```
<video width="600" controls>
  <source src="../../media/ReferenceObject.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
---

## **WindAffectsDrag**

- **Description:** Allows wind to effect how particles move around in the world.
- **Default:** `false`
- **Example:**
  ```lua
  emitter:Create({ -- Particles are affected by wind forces
      WindAffectsDrag = true
  })
  ```

<video width="600" controls>
  <source src="../../media/WindAffectsDrag.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

---

## **FaceVelocity**

- **Description:** Makes particles face the direction they are moving.
- **Default:** `false`
- **Example:**
  ```lua
  emitter:Create({ -- Particles will face the direction of their movement
      FaceVelocity = true
  })
  ```

<video width="600" controls>
  <source src="../../media/FaceVelocity.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

---

## **ParticleFolder**

- **Description:** Determines the folder where particles are stored in the game hierarchy.
- **Default:** `nil`
- **Example:**
  ```lua
  emitter:Create({ -- Particles will be organized under this folder
      ParticleFolder = game.Workspace("Particles")
  })
  ```

---

## **RandomizedColor**

- **Description:** When enabled, assigns a random color to each particle.
- **Default:** `false`
- **Example:**
  ```lua
  emitter:Create({ -- Particles will have random colors
      RandomizedColor = true
  })
  ```

<video width="600" controls>
  <source src="../../media/RandomizedColor.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

---

## **LockedToPart**

- **Description:** Keeps particles attached to the part they are emitted from, even if the emitter moves.
- **Default:** `false`
- **Example:**
  ```lua
  emitter:Create({ -- Particles stay attached to the part
      LockedToPart = true
  })
  ```

---

## **CastShadow**

- **Description:** Determines whether the particles cast shadows.
- **Default:** `false`
- **Example:**
  ```lua
  emitter:Create({ -- Particles will cast shadows
      CastShadow = true
  })
  ```

<video width="600" controls>
  <source src="../../media/CastShadow.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

---

## **EmitterID**

- **Description:** When specified, any string (a word inside of "quotes") will turn into an ID that is binded to the emitter, which allows you to `Start`, `Stop`, or `Destroy` any emitter from any script, as long as the script that remotely interacts with the script is the same `RunContext` as the script that created the emitter, so Client scripts can only remotely control other client emitters, while server scripts can only remotely control other server emitters, they cannot cross. ID can be literally anything as long as it is a string.
- **Default:** `"Default"`
- **Example:**
  ```lua
  emitter:Create({ -- Emitter will be paired with "EmitterID1"
      EmitterID = "EmitterID1"
  })
  ```

---

## **GetEmitterByID**

- **Description:** When called, the variable paired with the function recieves a callback of the emitter, allowing you to `Start`, `Stop`, or `Destroy` any emitter from any script, as long as the script is server-sided
- **Example:**
  ```lua
  local ReplicatedStorage = game:GetService("ReplicatedStorage")
  local ParticleEmitter3D = require(ReplicatedStorage:WaitForChild("ParticleEmitter3D"))
  local emitter = ParticleEmitter3D:GetEmitterFromID("EmitterID1") -- Emitter will be set to whatever emitter already exists and is paired with "EmitterID1"
  ```

---

## **ParticleEmitter2D (Deprecated)**
!!! danger "Deprecated, use `ReferenceObject`"
- **Description:** When specified, each particle emits their own 2D particle emitter.
- **Default:** `nil`
- **Example:**
  ```lua
  emitter:Create({ -- Particles will emit particles cloned from a ParticleEmitter
      ParticleEmitter2D = game.Workspace:FindFirstChild("ParticleEmitter")
  })
  ```

---

## **IsShapeMesh (Deprecated)**
!!! danger "Deprecated, use `ReferenceObject`"
- **Description:** When enabled, the part will emit `Mesh` objects instead of regular `Part` objects
- **Default:** `false`
- **Example:**
  ```lua
  emitter:Create({ -- Particles will emit as MeshParts instead of Parts
      IsShapeMesh = true
  })
  ```

---

## **MeshID (Deprecated)**
!!! danger "Deprecated, use `ReferenceObject`"
- **Description:** When specified, the `Mesh` object will use this `MeshID`
- **Default:** `nil`
- **Example:**
  ```lua
  emitter:Create({ -- Particles will have the MeshId of 0
      IsShapeMesh = true,
      MeshId = rbxassetid://0
  })
  ```
  
---

## **Trail (Deprecated)**
!!! danger "Deprecated, use `ReferenceObject`"
- **Description:** When specified, the `Mesh` object will have a `Trail`
- **Default:** `nil`
- **Example:**
  ```lua
  emitter:Create({ -- Particles will have a trail instance
      Trail = game.Workspace:FindFirstChild("Trail")
  })
  ```

---

## **TextureID (Deprecated)**
!!! danger "Deprecated, use `ReferenceObject`"
- **Description:** When specified, the `Mesh` object will use this `TextureID`
- **Default:** `nil`
- **Example:**
  ```lua
  emitter:Create({ -- Particles will have the TextureId of 0
      IsShapeMesh = true,
      TextureId = rbxassetid://0
  })
  ```

---

These advanced properties give you even more control and customization for your particle.