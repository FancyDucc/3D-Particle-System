# Light Properties

The system allows you to control how particles interact with light in your game environment. This has influencing particles with light sources and managing how particles emit light themselves.

!!! warning "Light Influence Properties are still in development"

    You may experience flickering, shadow casting issues, or other visual problems when using light properties. If these happen, maybeee consider turning off shadows or reducing the number of active lights to minimize the impact.
    Most of the flickering and issues happen with shadows in general.

---

## **LightInfluenceEnabled**

- **Description:** Enables the particles to be influenced by the surrounding light sources. When activated, particles can change color and brightness based on the lights in the environment.
- **Default:** `false`
- **Example:**
  ```lua
  emitter:Create({ -- Particles will react to nearby light sources
      LightInfluenceEnabled = true
  })
  ```

---

## **LightBrightnessInfluence**

- **Description:** Controls how much the brightness of the light sources affects the particles. A higher value increases the influence of light brightness on the particles.
- **Default:** `0`
- **Example:**
  ```lua
  emitter:Create({ -- Particles are fully influenced by light brightness
      LightInfluenceEnabled = true,
      LightBrightnessInfluence = 1
  })
  ```

---

## **LightInfluenceSensitivity**

- **Description:** Adjusts the sensitivity of the particles to changes in light. Higher values make particles more reactive to light intensity changes.
- **Default:** `0`
- **Example:**
  ```lua
  emitter:Create({ -- Particles are highly sensitive to changes in light
      LightInfluenceEnabled = true,
      LightInfluenceSensitivity = 3
  })
  ```

---

## **LightColorInfluence**

- **Description:** Determines how much the color of the light sources affects the particle color. A higher value means the particle color will change more dramatically based on the surrounding lights.
- **Default:** `0`
- **Example:**
  ```lua
  emitter:Create({ -- Particles' color is fully influenced by light colors
      LightInfluenceEnabled = true,
      LightColorInfluence = 1
  })
  ```

---

## **LightEmission**

- **Description:** Sets the brightness of light emitted by the particles themselves. Useful for creating glowing or light-emitting particles. Higher values add more "white" into the color, lower values saturate the color more, **recommended to stay between 0 and 1.**
- **Default:** `0`
- **Example:**
  ```lua
  emitter:Create({ -- Particles are bright
      EmitLight = true,
      LightEmission = 0.75
  })
  ```

---

## **EmitLight (Deprecated)**
!!! danger "Deprecated, use `ReferenceObject`"
- **Description:** Previously used to make particles emit light. It is now recommended to use the `ManualLightProperties` property for more control and future compatibility.
- **Default:** `false`
- **Example:**
  ```lua
  emitter:Create({
      EmitLight = true
  })
  ```

---

## **ManualLightProperties (Deprecated)**
!!! danger "Deprecated, use `ReferenceObject`"
- **Description:** When enabled, allows you to manually adjust properties of the light emitted by the particles, such as brightness, color, and range.
- **Default:** `false`
- **Example:**
  ```lua
  emitter:Create({
      EmitLight = true,
      ManualLightProperties = true,
      LightBrightness = 10,
      LightColor = Color3.fromRGB(255, 255, 255),
      LightRange = 15,
      LightShadows = true
  })
  ```
---

These light properties give you control over how particles interact with light in your game world, adding another layer of visual appeal.