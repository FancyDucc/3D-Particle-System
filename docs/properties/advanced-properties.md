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
---

## **EmissionShape**

- **Description:** Changes what shape particles can emit from the adornee
- **Default:** `Enum.ParticleEmitterShape.Box`
- **Example:**
  ```lua
  emitter:Create({ -- Particles will emit in a cylinder pattern
      EmissionShape = Enum.ParticleEmitterShape.Cylinder
  })
  ```

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

---

## **EmitterID**

- **Description:** When specified, any string (a word inside of "quotes") will turn into an ID that is binded to the emitter, which allows you to run any function from any emitter from any script, as long as the script that remotely interacts with the script is the same `RunContext` as the script that created the emitter, so Client scripts can only remotely control other client emitters, while server scripts can only remotely control other server emitters, they cannot cross. ID can be literally anything as long as it is a string.
- **Default:** `"Default"`
- **Example:**
  ```lua
  emitter:Create({ -- Emitter will be paired with "EmitterID1"
      EmitterID = "EmitterID1"
  })
  ```

---

## **GetEmitterByID**

- **Description:** When called, the variable paired with the function recieves a callback of the emitter, allowing you to run any function from any emitter from any script, as long as the script is the same `RunContext` as the script that created the emitter.
- **Example:**
  ```lua
  local ReplicatedStorage = game:GetService("ReplicatedStorage")
  local VortexFXParticles = require(ReplicatedStorage:WaitForChild("VortexFXParticles"))
  local emitter = VortexFXParticles:GetEmitterFromID("EmitterID1") -- Emitter will be set to whatever emitter already exists and is paired with "EmitterID1"
  ```

---

## **Flipbook**

- **Description:** Enables particles to cycle through multiple meshes and textures during their lifetime, creating an animated flipbook effect. The mesh and texture IDs are updated at a specified frame rate, and the animation can follow different patterns.
- **Default:** `nil`
- **Example:**
  ```lua
  emitter:Create({
      Flipbook = { -- Define the frames for the flipbook animation
          {
              MeshId = 'rbxassetid://1',
              TextureId = 'rbxassetid://2'
          },
          {
              MeshId = 'rbxassetid://3',
              TextureId = 'rbxassetid://4'
          },
          {
              MeshId = 'rbxassetid://5',
              TextureId = 'rbxassetid://6'
          },
          {
              MeshId = 'rbxassetid://7',
              TextureId = 'rbxassetid://8'
          }
      },
  })
  ```

---

## **FlipbookMode**

- **Description:** Determines the cycling pattern of the flipbook frames. Available modes are:
  - **Loop:** Cycles through all frames from start to end, then loops back to the first frame.
  - **OneShot:** Runs through all frames once, starting from the first frame, and adjusts frame rate to match the particle's lifetime.
  - **PingPong:** Moves through the frames forward to the last frame, then reverses back to the first frame at the same frame rate.
  - **Random:** Selects a random frame at each interval.
- **Default:** `Enum.ParticleFlipbookMode.OneShot`

---

## **FlipbookFrameRate**

!!! note "OneShot Ignores FrameRate"
    When using `OneShot` as a `FlipbookMode`, the frame rate is ignored as `OneShot` adjusts the frame rate to match the particles lifetime.

- **Description:** Sets the frame rate for the flipbook animation. Can be a fixed number or a `NumberRange` to randomize the rate.
- **Default:** `2`
- **Example:**
  ```lua
  emitter:Create({ -- Particles will cycle through frames at a random frame rate between 1 and 4 frames per second
      Flipbook = {}
      FlipbookFrameRate = NumberRange.new(1, 4)
  })
  ```

---

## **FlipbookStartRandom**

- **Description:** If enabled, the flipbook animation starts at a random frame instead of the first frame.
- **Default:** `false`
- **Example:**
  ```lua
  emitter:Create({ -- Particles start at a random frame in the flipbook
      Flipbook = {}
      FlipbookStartRandom = true
  })
  ```

---

## **VelocityInheritance**

- **Description:** Controls how much of the adornee's velocity is inherited by emitted particles. This allows particles to carry over the momentum of the object they are emitted from.
- **Default:** `0`
- **Example:**
  ```lua
  emitter:Create({
      VelocityInheritance = 0.5 -- Particles inherit 50% of the adornee's velocity
  })
  ```

---

## **VelocityInheritor**

- **Description:** What instance the particles take velocity from, singular instances only.
- **Default:** `nil`
- **Example:**
  ```lua
  emitter:Create({
      VelocityInheritor = game.Workspace.VelocityCauser -- Particles inherit the velocity from this object
  })
  ```

---

## **KeepOriginalTransparencies**

- **Description:** Determines if all transparency related parts inside a model being emitted remains how it was when the model is first added.
- **Default:** `false`
- **Example:**
  ```lua
  emitter:Create({
      KeepOriginalTransparencies = true -- Original transparencies are kept from the original model
  })
  ```

---

## **KeepOriginalColors**

- **Description:** Determines if all colors given to parts inside a model being emitted remains how it was when the model is first added.
- **Default:** `false`
- **Example:**
  ```lua
  emitter:Create({
      KeepOriginalColors = true -- Original colors are kept from the original model
  })
  ```

---

## **KeepOriginalMaterials**

- **Description:** Determines if all materials on parts inside a model being emitted remains how it was when the model is first added.
- **Default:** `false`
- **Example:**
  ```lua
  emitter:Create({
      KeepOriginalMaterials = true -- Original materials are kept from the original model
  })
  ```

---

## **Attractor**

- **Description:** A Table of or a single instance that pulls particles in, think of the attractor as the positive side of a magnet and the particles metal fragments.
- **Default:** `nil`
- **Example:**
  ```lua
  emitter:Create({
      Attractor = game.Workspace.Attractor -- This object will pull particles in
  })
  ```
  OR
  ```lua
  emitter:Create({
      Attractor = {game.Workspace.Attractor1, game.Workspace.Attractor2, game.Workspace.Attractor3} -- These objects will pull particles in
  })
  ```

---

## **Repulsor**

- **Description:** A Table of or a single instance that pushes particles away, think of the repulsor as the positive side of a magnet and the particles another positive sided magnet.
- **Default:** `nil`
- **Example:**
   ```lua
  emitter:Create({
      Repulsor = game.Workspace.Repulsor -- This object will push particles away
  })
  ```
  OR
  ```lua
  emitter:Create({
      Repulsor = {game.Workspace.Repulsor1, game.Workspace.Repulsor2, game.Workspace.Repulsor3} -- These objects will push particles away
  })
  ```

---

## **AttractorRange**

- **Description:** The range at which the attractor starts pulling particles.
- **Default:** `40`
- **Example:**
  ```lua
  emitter:Create({
      AttractorRange = 100 -- A particle will start being effected when the attractor is within 100 studs of a particle
  })
  ```

---

## **AttractorStyle**

- **Description:** The graph style of the attractor.
- **Default:** `Enum.EasingStyle.Linear`
- **Example:**
  ```lua
  emitter:Create({
      AttractorStyle = Enum.EasingStyle.Exponential -- The attractor will have an exponential amount of pull on the particles, close = a lot of pull, far = very little pull
  })
  ```

---

## **AttractorIntensity**

- **Description:** How intense the pull that particles go under, higher = more pull, lower = less pull.
- **Default:** `10`
- **Example:**
  ```lua
  emitter:Create({
      AttractorIntensity = 25 -- The particles will be pulled enough to look like a normal magnet
  })
  ```

---

## **RepulsorRange**

- **Description:** The range at which the repulsor starts pushing particles.
- **Default:** `40`
- **Example:**
  ```lua
  emitter:Create({
      RepulsorRange = 100 -- A particle will start being effected when the repulsor is within 100 studs of a particle
  })
  ```

---

## **RepulsorStyle**

- **Description:** The graph style of the repulsor.
- **Default:** `Enum.EasingStyle.Linear`
- **Example:**
  ```lua
  emitter:Create({
      RepulsorStyle = Enum.EasingStyle.Exponential -- The attractor will have an exponential amount of push on the particles, close = a lot of push, far = very little push
  })
  ```

---

## **RepulsorIntensity**

- **Description:** How intense the push that particles go under, higher = more push, lower = less push.
- **Default:** `10`
- **Example:**
  ```lua
  emitter:Create({
      RepulsorIntensity = 50 -- The particles will be pulled enough to look like 2 magnets facing eachother
  })
  ```

---

## **CollisionGroup**

- **Description:** The collision group of particles.
- **Default:** `"Default"`
- **Example:**
  ```lua
  emitter:Create({
      CollisionGroup = "Particles"  -- Particles will only collide with objects the collision group "Particles" will have set to collision.
  })
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