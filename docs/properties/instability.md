# Instability Properties

The system comes with a property list that can allow you to create randomness involving positions.

---

## **Instability**

- **Description:** Introduces a base level of randomness to the position of particles. This technically is more Intensity than a base level, it is the amount the particle will move in 3D space in studs
- **Default:** `0`
- **Example:**
  ```lua
  emitter:Create({ -- Particles will jitter slightly
      Instability = 2
  })
  ```

---

## **InstabilityIntensity**

- **Description:** Controls the intensity of the `Instability` effect. This belongs more to a `Instability` rate more than intensity, as this value will be how many times the `Instability` jitter will happen per second
- **Default:** `0`
- **Example:**
  ```lua
  emitter:Create({ -- Particles will have intense fast-paced movement
      Instability = 2,
      InstabilityIntensity = 12
  })
  ```

---

## **InstabilitySmoothness**

!!! warning "`InstabilitySmoothness` doesn't work at the moment"
    `InstabilitySmoothness` is entirely broken at the moment and won't work, I don't know why D:

- **Description:** Changes how smooth or snappy the instability movement will have, higher values are more smooth and flowy, lower values are more snappy and instant
- **Default:** `1`
- **Example:**
  ```lua
  emitter:Create({ -- Particles will have smoother movements and look flowy
      Instability = 2,
      InstabilitySmoothness = 1
  })
  ```

---

`Instability` properties allow you to mimic electricity effects or randomness. `Instability` is a useful property when used right.