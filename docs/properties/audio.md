# Audio Properties

The system can be customized to react to audio, letting you to create effects that sync with music or other sounds in your game.

!!! note
    
    All audio properties **must** have an `AudioReactive` property paired together or else it simply won't do anything.

## **AudioReactive**

- **Description:** Links a sound object to the particle system, making the particles react to the sound's playback.
- **Default:** `nil`
- **Example:**
  ```lua
  local sound = workspace:WaitForChild("Sound") -- Replace with a sound instance
  emitter:Create({ -- Particles will react to this sound but not without any of the influences below
      AudioReactive = sound 
  })
  ```

## **AudioInfluencedColor**

- **Description:** Allows the color of the particles to change based on the loudness of the linked audio.
- **Default:** `false`
- **Example:**
  ```lua
  emitter:Create({ -- Particles change color based on audio loudness
      AudioReactive = sound,
      AudioInfluencedColor = true
  })
  ```

## **AudioInfluencedSpeed**

- **Description:** Makes the speed of the particles fluctuate according to the loudness of the audio.
- **Default:** `false`
- **Example:**
  ```lua
  emitter:Create({ -- Particle speed varies with audio loudness
      AudioReactive = sound,
      AudioInfluencedSpeed = true
  })
  ```

## **AudioInfluencedSize**

- **Description:** Alters the size of the particles in sync with the audio's loudness.
- **Default:** `false`
- **Example:**
  ```lua
  emitter:Create({ -- Particle size changes with audio loudness
      AudioReactive = sound,
      AudioInfluencedSize = true
  })
  ```

## **AudioIndependentSpeed**

- **Description:** When set to true, this property ensures that the particle's speed remains constant and isn't affected by audio fluctuations, even if `AudioInfluencedSpeed` is enabled.
- **Default:** `false`
- **Example:**
  ```lua
  emitter:Create({
      AudioReactive = sound, -- Particle speed remains constant despite audio fluctuations
      AudioInfluencedSpeed = true,
      AudioIndependentSpeed = true
  })
  ```

## **AudioIndependentSize**

- **Description:** Similar to `AudioIndependentSpeed`, this keeps the particle size constant, unaffected by the audio, even if `AudioInfluencedSize` is enabled.
- **Default:** `false`
- **Example:**
  ```lua
  emitter:Create({ -- Particle size remains constant despite audio fluctuations
      AudioReactive = sound,
      AudioInfluencedSize = true,
      AudioIndependentSize = true
  })
  ```

## **AudioIndependentColor**

- **Description:** This property ensures that the particle color does not change with audio fluctuations, even if `AudioInfluencedColor` is enabled.
- **Default:** `false`
- **Example:**
  ```lua
  emitter:Create({ -- Particle color remains constant despite audio fluctuations
      AudioReactive = sound,
      AudioInfluencedColor = true,
      AudioIndependentColor = true
  })
  ```

## **AudioMultiplierSpeed**

- **Description:** Multiplies the audio's influence on particle speed. This allows you to scale how much the particle speed is affected by the audio.
- **Default:** `1`
- **Example:**
  ```lua
  emitter:Create({ -- Doubles the speed changes caused by audio loudness
      AudioReactive = sound,
      AudioInfluencedSpeed = true,
      AudioMultiplierSpeed = 2
  })
  ```

## **AudioMultiplierSize**

- **Description:** Multiplies the audio's influence on particle size, scaling the effect the audio has on particle size.
- **Default:** `1`
- **Example:**
  ```lua
  emitter:Create({ -- Lowers the size changes caused by audio loudness by half
      AudioReactive = sound,
      AudioInfluencedSize = true,
      AudioMultiplierSize = 0.5
  })
  ```

## **HueShift**

- **Description:** Shifts the hue of the particle's color based on the audio's loudness, higher values are more colorful.
- **Default:** `0`
- **Example:**
  ```lua
  emitter:Create({ -- Shifts the hue based on audio loudness
      AudioReactive = sound,
      AudioInfluencedColor = true,
      HueShift = 0.25
  })
  ```

---

These audio properties let you to create particle effects that are in sync with your sounds.