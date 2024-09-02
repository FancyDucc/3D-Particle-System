# Debug Properties

The system is always open to you or others modifying and changing how the system works and behaves, but good ways to do that is to have the ability to debug stuff.

---

## VisualizeRaycasts

!!! warning "Lag warning"
    Even though this is debugging, while collisions is enabled paired with light emission, raycast visualization can be VERY laggy, further in the future I might add an option to visualize a certain part of the system.

- **Description:** Changes whether or not raycasting is visualized and can be seen
- **Default:** `false`
- **Example:**
  ```lua
  emitter:Create({ -- Show raycasts
    VisualizeRaycasts = true
  })
  ```

---

With debugging, you can change the system yourself easier... were you expecting more??