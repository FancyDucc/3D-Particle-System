# Trajectory Properties

The system has properties that allow you to create specific paths for particles to follow. These trajectory properties let you to have effects where particles move along routes, making shapes or traveling through set points in space.

## **TrajectorialVertices**

- **Description:** When this table has at least 1 `Vector3` inside the table, the particles will attempt to move to the position of the `Vector3`, when there are multiple `Vector3`'s in the table, the particles will move from the first, to the second, then back to the first, it will loop.
- **Default:** `{}`
- **Example:**
  ```lua
  emitter:Create({ -- Particles will follow these points in space
      TrajectorialVertices = {
          Vector3.new(0, 0, 0),
          Vector3.new(10, 0, 0),
          Vector3.new(10, 10, 0),
          Vector3.new(0, 10, 0)
      }
  })
  ```

## **TrajectorialSmoothening**

- **Description:** Controls how smooth the particles take corners around the `Vector3`'s used in `TrajectorialVertices`, higher values will be more aggressive and snappy around corners, smaller values will be more soft and flowy around corners.
- **Default:** `0.1`
- **Example:**
  ```lua
  emitter:Create({ -- Particles will be slightly smooth around corners
      TrajectorialVertices = {
          Vector3.new(0, 0, 0),
          Vector3.new(5, 5, 5),
          Vector3.new(10, 0, 0)
      },
      TrajectorialSmoothening = 0.25
  })
  ```

---

Using trajectorial vertices, you can make particles follow a set path, this can be used for lightning paired with `Instability` or shapes.