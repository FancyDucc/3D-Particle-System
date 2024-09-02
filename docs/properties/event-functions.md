# Functions

The system lets you call custom functions for your needs, whether it be when the particle spawns, is destroyed, reaches half it's lifetime, every frame, or when the particle collides with something paired with `EnableCollision`

---

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

---

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

---

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

---

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

---

## **OnCollision**

- **Description:** Lets you to use a function that is called whenever a particle collides with an object. This function is paired with the velocity that the particle has when the function is called.
- **Default:** `nil`
- **Example:**
  ```lua
  emitter:Create({ -- Destroy the particle on collision if the particle is moving faster than 10 studs per second
    EnableCollision = true,
    OnCollision = function(particle, velocity)
        if velocity.Magnitude > 10 then
            particle:Destroy()
        end
    end
  }) 
  ```

---

## **OnBeat**

- **Description:** A function that is played every beat or hit that the system detects, using `BeatDetectionThreshold` as it's source.
- **Default:** `0.15`
- **Example:**
  ```lua
  emitter:Create({ -- Prints "Beat" everytime a beat happens
      AudioReactive = sound,
      OnBeat = function(particle)
          print("Beat")
      end
  })
  ```

---

These functions provide hooks into different stages of a particle's lifecycle, giving you the flexibility to create sophisticated effects. By defining custom functions for spawning, mid-life, death, and collision, you can control exactly how your particles behave and interact with the environment.