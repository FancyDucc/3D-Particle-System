# Collision Properties

The system lets you to control how particles interact with the environment through collision. This part covers properties that manage how particles detect and respond to collisions, whether they bounce, stop, or pass through objects.

!!! warning "Performance heavy"
    Particles using smart collision use raycasting to determine when they hit something, this can be laggy, so it's not the best idea to use many particles with collision when going for compatibility on lower-end devices

---

## **CanCollide**

- **Description:** Controls if particles are collidable with physics objects, such as players
- **Default:** `false`
- **Example:**
  ```lua
  emitter:Create({ -- Physics objects will collide with particles
      CanCollide = true
  })
  ```

## **EnableCollision**

- **Description:** Enables collision detection for particles, allowing them to interact with objects in the world.
- **Default:** `false`
- **Example:**
  ```lua
  emitter:Create({ -- Particles will collide with objects
      EnableCollision = true
  })
  ```

<video width="600" controls>
  <source src="../../media/EnableCollision.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>


---

## **ParticlesAreSolid**

- **Description:** When enabled, particles will treat itself on collision as a solid object, for example, a bouncy ball is a solid object, while fire is not. When this is false, the particles will spread out around the surface of the hit object, when this is true, the particles will bounce.
- **Default:** `false`
- **Example:**
  ```lua
  emitter:Create({ -- Particles will bounce on collision
      EnableCollision = true,
      ParticlesAreSolid = true
  })
  ```

<video width="600" controls>
  <source src="../../media/ParticlesAreSolid.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

---

## **OnCollision**

- **Description:** Lets you to use a function that is called whenever a particle collides with an object. This can be used to trigger specific effects, such as particles changing color's on impact or creating explosive rockets/objects.
- **Default:** `nil`
- **Example:**
  ```lua
  emitter:Create({ -- Particles will destroy themselves on collision
      EnableCollision = true,
      OnCollision = function(particle, velocity)
        print("Hit with " .. velocity.Magnitude)
      end
  })
  ```

---

idk what to put here