# Particle Commands

The system's main goal is to provide 3D particles at the best performance and optimization as possible, these properties can help reduce lag depending on what you choose.

!!! note "Client side only"
    All of the performance methods that involve culling or cameras are client sided only and can only be used on emitters that have been created on the client.

---

## **CullingEnabled**

- **Description:** Will stop emitting particles when the player's camera looks away from the emitter.
- **Default:** `false`
- **Example:**
  ```lua
  emitter:Create({ -- Particles will stop emitting when a player looks away.
      CullingEnabled = true
  })
  ```

---

## **AggressiveCullingEnabled**

- **Description:** Will stop updating all particles when a player's camera looks away from the emitter, this is a better choice than `CullingEnabled` if you want the particles to start faster, but `CullingEnabled` is superior if you want the most amount of performance. Most performance properties are compatible with `AggressiveCullingEnabled`
- **Default:** `false`
- **Example:**
  ```lua
  emitter:Create({ -- Particles will stop updating when a player looks away.
      AggressiveCullingEnabled = true
  })
  ```

---

## **FocusAware**

- **Description:** Will stop emitting particles when the player minimizes the Roblox client or focuses on a different application
- **Default:** `false`
- **Example:**
  ```lua
  emitter:Create({ -- Particles will stop emitting when a player focuses on a different application
      FocusAware = true
  })
  ```

- **Example 2:**
  ```lua
  emitter:Create({ -- Particles will stop updating when a player focuses on a different application
      AggressiveCullingEnabled = true,
      FocusAware = true
  })
  ```

---

## **RenderDistance**

- **Description:** Will stop emitting particles when the players camera is the distance specified from the emitter
- **Default:** `514`
- **Example:**
  ```lua
  emitter:Create({ -- Particles will stop emitting when a players camera is 200 studs away from the emitter
      RenderDistance = 200
  })
  ```

- **Example 2:**
  ```lua
  emitter:Create({ -- Particles will lower the maximum particles that can exist from this emitter the further the players camera is from the emitter
      RenderDistance = 200,
      MaximumParticleCount = 100,
      AdaptiveParticleLimits = true
  })
  ```

---

## **MaximumParticleCount & MinimumParticleCount**

- **Description:** The maximum and minimum amount of particles that can be emitted from an emitter at once, used especially in twine with `RenderDistance` and `AdaptiveParticleLimits`
- **Default:** `240 & 5`
- **Example:**
  ```lua
  emitter:Create({ -- Particles will stop emitting when a player looks away.
      MaximumParticleCount = 100
      MinimumParticleCount = 5
  })
  ```

---

## **AdaptiveParticleLimits**

- **Description:** Will lower the maximum amount of particles that can exist from an emitter the further the players camera is from the emitter
- **Default:** `false`
- **Example:**
  ```lua
  emitter:Create({ -- Particles will lower the maximum particles that can exist from this emitter the further the players camera is from the emitter
      RenderDistance = 200,
      MaximumParticleCount = 100,
      AdaptiveParticleLimits = true
  })
  ```

---

## **CullingExtentsOffset**

- **Description:** Will determine the distance the camera needs to look towards the emitter to disable or enable the emitter.
- **Default:** `Vector3.new(0, 0, 0)`
- **Example:**
  ```lua
  emitter:Create({ -- Particles will stop emitting when a player looks away within 5 studs of the emitter
      CullingExtentsOffset = Vector3.new(5, 5, 5)
  })
  ```

---

These properties allow you to use more particles with minimal performance reduction.