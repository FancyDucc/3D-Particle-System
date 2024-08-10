# Functions

The system lets you call custom functions for your needs, whether it be when the particle spawns, is destroyed, reaches half it's lifetime, every frame, or when the particle collides with something paired with `EnableCollision`

## **OnSpawn**

- **Description:** This function is called when a particle is first created or spawned.
- **Default:** `nil`
- **Example:**
  ```lua
  emitter:Create({ -- Print "particle spawned" when called
    OnSpawn = function(particle)
        print("particle spawned")
    end
  })
  ```

## **HalfLife**

- **Description:** This function is called when a particle reaches half of its lifetime. Not affiliated with [Half Life](https://www.half-life.com/en/home/)
- **Default:** `nil`
- **Example:**
  ```lua
  emitter:Create({ -- Print "particle is at half life" when called
    HalfLife = function(particle)
        print("particle is at half life")
    end
  })
  ```

## **OnDeath**

- **Description:** This function is called when a particle is about to be destroyed or removed.
- **Default:** `nil`
- **Example:**
  ```lua
  emitter:Create({ -- Print the particle name and "has been destroyed" when called
    OnDeath = function(particle)
        print(particle.Name .. " has been destroyed")
    end
  })
  ```

## **ConstantFunction**

- **Description:** This function is called every frame prior to the frame being rendered.
- **Default:** `nil`
- **Example:**
  ```lua
  emitter:Create({ -- Print the particles position every frame
    ConstantFunction = function(particle)
        print(tostring(particle.Position))
    end
  })
  ```

## **OnCollision**

- **Description:** Lets you to use a function that is called whenever a particle collides with an object. This can be used to trigger specific effects, such as particles changing color's on impact or creating explosive rockets/objects.
- **Default:** `nil`
- **Example:**
  ```lua
  emitter:Create({ -- Print the particle name and "has been destroyed" when called
    EnableCollision = true,
    OnCollision = function(particle)
        particle:Destroy()
    end
  }) 
  ```

---

These functions provide hooks into different stages of a particle's lifecycle, giving you the flexibility to create sophisticated effects. By defining custom functions for spawning, mid-life, death, and collision, you can control exactly how your particles behave and interact with the environment.