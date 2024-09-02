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

- **Description:** Controls the percentage of how fast `Instability` happens on a percentage scale of 0 to 100 (which can go past 100%). 0% is so slow instability doesnt seem to work, 100% is semi-instant.
- **Default:** `0`
- **Example:**
  ```lua
  emitter:Create({ -- Instability will be smooth but still have visible changes.
      Instability = 2,
      InstabilitySmoothness = 50
  })
  ```

---

`Instability` properties allow you to mimic electricity effects or randomness or paired with the smoothness can be created to mimic flies or flying animals. `Instability` is a useful property when used right.