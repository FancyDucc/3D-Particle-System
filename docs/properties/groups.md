# Group Properties

Groups can be used on properties to have multiple particles all work in unison, creating pretty effects.

!!! note

    The `Grouped` property must be true in order for any group-related properties to take effect.

---

## **Grouped**

- **Description:** Enables group behavior for the particle system. When set to `true`, particles will work in groups based on the defined group properties.
- **Default:** `false`
- **Example:**
  ```lua
  emitter:Create({
      Grouped = true
  })
  ```

---

## **GroupAmount**

- **Description:** Specifies the number of groups the particles should be divided into.
- **Default:** `1`
- **Example:**
  ```lua
  emitter:Create({
      Grouped = true,
      GroupAmount = 3
  })
  ```

---

## **ParticlesPerGroup**

- **Description:** Determines the number of particles per group.
- **Default:** `10`
- **Example:**
  ```lua
  emitter:Create({
      Grouped = true,
      ParticlesPerGroup = 15
  })
  ```

---

## **GroupBehavior**

- **Description:** Defines how particles in a group behave relative to each other. Possible values are:
  - `Follow`: Particles follow the group's heart particle.
  - `Cluster`: Particles stay in close proximity to the heart particle.
  - `Walk`: Particles move randomly within a certain range around the heart.
  - `Avoid`: Particles move away from the heart if they get too close.
  - `OneToOne`: Each particle maintains a specific offset from the heart particle.
  - `Orbit`: Particles orbit around the heart particle.
- **Default:** `Follow`
- **Example:**
  ```lua
  emitter:Create({
      Grouped = true,
      GroupBehavior = "Orbit"
  })
  ```

---

## **GroupRotationBehavior**

- **Description:** Specifies how particle rotations are influenced by the heart particle.
  - `Clone`: All particles copy the rotation of the heart particle.
  - `Independent`: Particles maintain their individual rotations.
- **Default:** `Clone`
- **Example:**
  ```lua
  emitter:Create({
      Grouped = true,
      GroupRotationBehavior = "Independent"
  })
  ```

---

## **GroupBehaviorOnHeartDeath**

- **Description:** Determines what happens to the group if the heart particle dies.
  - `Scatter`: Particles scatter in random directions.
  - `Continue`: Particles continue with the current behavior.
  - `Reassign`: A new heart particle is chosen from the group.
  - `Kill`: All particles in the group are killed.
- **Default:** `Scatter`
- **Example:**
  ```lua
  emitter:Create({
      Grouped = true,
      GroupBehaviorOnHeartDeath = "Reassign"
  })
  ```

---

## **ScatterPower**

- **Description:** The power with which particles scatter when the heart particle dies.
- **Default:** `10`
- **Example:**
  ```lua
  emitter:Create({
      Grouped = true,
      GroupBehaviorOnHeartDeath = "Scatter",
      ScatterPower = 15
  })
  ```

---

## **AvoidDistance**

- **Description:** Specifies the distance at which particles will start avoiding the heart particle when `GroupBehavior` is set to `Avoid`.
- **Default:** `5`
- **Example:**
  ```lua
  emitter:Create({
      Grouped = true,
      GroupBehavior = "Avoid",
      AvoidDistance = 10
  })
  ```

---

## **ClusterDistance**

- **Description:** Specifies the maximum distance that particles can be from the heart particle when `GroupBehavior` is set to `Cluster`.
- **Default:** `2`
- **Example:**
  ```lua
  emitter:Create({
      Grouped = true,
      GroupBehavior = "Cluster",
      ClusterDistance = 3
  })
  ```

---

## **GroupWalkExtents**

- **Description:** Defines the 3D space within which particles can move when `GroupBehavior` is set to `Walk`.
- **Default:** `Vector3.new(5, 5, 5)`
- **Example:**
  ```lua
  emitter:Create({
      Grouped = true,
      GroupBehavior = "Walk",
      GroupWalkExtents = Vector3.new(10, 10, 10)
  })
  ```

---

## **GroupWalkAggression**

- **Description:** Determines how aggressively particles move within the defined walk extents.
- **Default:** `0.5`
- **Example:**
  ```lua
  emitter:Create({
      Grouped = true,
      GroupBehavior = "Walk",
      GroupWalkAggression = 1
  })
  ```

---

## **OneToOneOffset**

- **Description:** Defines the offset that each particle maintains from the heart particle when `GroupBehavior` is set to `OneToOne`.
- **Default:** `Vector3.new(0, 0, 0)`
- **Example:**
  ```lua
  emitter:Create({
      Grouped = true,
      GroupBehavior = "OneToOne",
      OneToOneOffset = Vector3.new(1, 1, 1)
  })
  ```

---

## **GroupKillDelay**

- **Description:** Specifies the delay before all particles in a group are killed after the heart particle dies, when `GroupBehaviorOnHeartDeath` is set to `Kill`.
- **Default:** `nil`
- **Example:**
  ```lua
  emitter:Create({
      Grouped = true,
      GroupBehaviorOnHeartDeath = "Kill",
      GroupKillDelay = 0.5
  })
  ```

---

## **GroupOrbitRange**

- **Description:** Specifies the radius of the orbit when `GroupBehavior` is set to `Orbit`.
- **Default:** `10`
- **Example:**
  ```lua
  emitter:Create({
      Grouped = true,
      GroupBehavior = "Orbit",
      GroupOrbitRange = 15
  })
  ```

---

## **GroupOrbitAxis**

- **Description:** Defines the axis around which particles orbit when `GroupBehavior` is set to `Orbit`.
- **Default:** `Vector3.new(0, 1, 0)`
- **Example:**
  ```lua
  emitter:Create({
      Grouped = true,
      GroupBehavior = "Orbit",
      GroupOrbitAxis = Vector3.new(1, 0, 0)
  })
  ```

---

## **GroupOrbitSpeed**

- **Description:** Specifies the speed at which particles orbit around the heart particle when `GroupBehavior` is set to `Orbit`.
- **Default:** `1`
- **Example:**
  ```lua
  emitter:Create({
      Grouped = true,
      GroupBehavior = "Orbit",
      GroupOrbitSpeed = 2
  })
  ```

---

## **GroupOrbitSmoothing**

- **Description:** Controls the smoothing of the orbit movement, making the orbit more or less fluid.
- **Default:** `1`
- **Example:**
  ```lua
  emitter:Create({
      Grouped = true,
      GroupBehavior = "Orbit",
      GroupOrbitSmoothing = 0.8
  })
  ```

---

These group particles further increase just what you can do with this system combined with other properties by a lot.