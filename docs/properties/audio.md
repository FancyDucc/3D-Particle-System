# Audio Properties

The system can be customized to react to audio, letting you to create effects that sync with music or other sounds in your game.
VortexFX is quite powerful when it comes to audio, as it has many features that can be easily accessed and to nearly every time provide a good result.

!!! note
    
    All audio properties **must** have an `AudioReactive` property paired together or else it simply won't do anything.

---

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

---

## **AudioInfluencedColor**

!!! note "Saturation notice"
    `AudioInfluencedColor` changes the HUE of the color the particle is at spawn, if your particle has no saturation in any color, there will be no visible change.

!!! note "Compatibility"
    `AudioInfluencedColor` is *NOT* compatible with `ColorSequence`, if your particle has a `ColorSequence` applied, the color will be set to the first keypoint and it will not go through the `ColorSequence` as expected.


- **Description:** Allows the color of the particles to change based on the loudness of the linked audio.
- **Default:** `false`
- **Example:**
  ```lua
  emitter:Create({ -- Particles change color based on audio loudness
      AudioReactive = sound,
      AudioInfluencedColor = true
  })
  ```

---

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

---

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

---

## **AudioIndependentSpeed**

- **Description:** When set to true, this property makes it that the particle's speed remains constant and isn't affected by audio changes past when it was first created, even if `AudioInfluencedSpeed` is enabled.
- **Default:** `false`
- **Example:**
  ```lua
  emitter:Create({
      AudioReactive = sound, -- Particle speed remains constant despite audio fluctuations
      AudioInfluencedSpeed = true,
      AudioIndependentSpeed = true
  })
  ```

---

## **AudioIndependentSize**

- **Description:** Similar to `AudioIndependentSpeed`, this keeps the particle size constant, unaffected by the audio changes past when the particle was first created, even if `AudioInfluencedSize` is enabled.
- **Default:** `false`
- **Example:**
  ```lua
  emitter:Create({ -- Particle size remains constant despite audio fluctuations
      AudioReactive = sound,
      AudioInfluencedSize = true,
      AudioIndependentSize = true
  })
  ```

---

## **AudioIndependentColor**

- **Description:** This property makes sure that the particle color does not change with audio changes past when the particle was first created, even if `AudioInfluencedColor` is enabled.
- **Default:** `false`
- **Example:**
  ```lua
  emitter:Create({ -- Particle color remains constant despite audio fluctuations
      AudioReactive = sound,
      AudioInfluencedColor = true,
      AudioIndependentColor = true
  })
  ```

---

## **AudioMultiplierSpeed**

- **Description:** Multiplies the audio's influence on particle speed. This allows you to scale how much the particle speed is affected by the audio, can be used with low `Speed` and high `AudioMultiplierSpeed` to increase the visible audio amount.
- **Default:** `1`
- **Example:**
  ```lua
  emitter:Create({ -- Doubles the speed changes caused by audio loudness
      AudioReactive = sound,
      AudioInfluencedSpeed = true,
      AudioMultiplierSpeed = 2
  })
  ```

---

## **AudioMultiplierSize**

- **Description:** Multiplies the audio's influence on particle size, scaling the effect the audio has on particle size.
- **Default:** `1`
- **Example:**
  ```lua
  emitter:Create({ -- Lowers the size changes caused by audio loudness by half
      AudioReactive = sound,
      AudioInfluencedSize = true,
      AudioMultiplierSize = 2
  })
  ```


---

## **AudioHueShift**

- **Description:** Shifts the hue of the particle's color based on the audio's loudness, higher values are more colorful.
- **Default:** `0.15`
- **Example:**
  ```lua
  emitter:Create({ -- Shifts the hue based on audio loudness
      AudioReactive = sound,
      AudioInfluencedColor = true,
      HueShift = 1
  })
  ```

## **BeatDetectionThreshold**

- **Description:** Controls how much the audio loudness should change between frames for the system to consider that point in music a beat or a hit.
- **Default:** `22.5`
- **Example:**
  ```lua
  emitter:Create({ -- Audio loudness must increase by 25 within 2 frames to be considered a beat
      AudioReactive = sound,
      BeatDetectionThreshold = 25,
  })
  ```

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

These audio properties let you to create particle effects that are in sync with your sounds.