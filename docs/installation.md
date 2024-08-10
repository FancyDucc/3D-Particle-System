# Installation

Getting started with the 3D Particle Emitter is very easy and straightforward, so you can focus more on creation than the boring stuff. Just follow these quick steps, and you’ll be up and running in no time.

## **Step 1: Download the Module**

First, you’ll need to download the `.rbxm` file that contains the 3D Particle Emitter module.

[Download the 3D Particle Emitter Module](downloads\ParticleEmitter3D.rbxm)

If you aren't comfortable with downloading the file or you are having troubles downloading it, a different method is to install from the Roblox creator hub, you can install the model from here: 

[Roblox Creator Hub](https://create.roblox.com/store/asset/18888338285/ParticleEmitter3D)

## **Step 2: Insert the Module into Your Project**

Once you’ve downloaded the module, open up your Roblox Studio experience. You can place the module in either **ReplicatedStorage** or **ServerScriptService**, depending on your experience needs. Here’s how to do it:

1. **Drag and Drop**: Simply drag the downloaded `.rbxm` file from your file explorer into the **Viewport** panel (The area where you can see the game world) in Roblox Studio.

2. **Click and use**: If you instead installed through the Roblox Creator Hub, you'll find the module in the Toolbox > My Models > ParticleEmitter3D, simply drag and drop or click on the panel and the module will add to the game.

3. **Placement**: Place the module in **ReplicatedStorage** if you want it to be accessible to both server and client scripts. If it's only going to be used server-side, **ServerScriptService** is the best spot for it.

!!! note
    The module is recommended to be placed in the **ReplicatedStorage** and for most particles to be used on the Client, it's not recommended to use particles on the server as it can cause lag to every player when many particles are in use.

## **Step 3: Require the Module**

With the module in place, it’s time to require it in your scripts. Here’s a quick example of how to do this:

```lua
    local ReplicatedStorage = game:GetService("ReplicatedStorage")
    local ParticleEmitter3D = require(ReplicatedStorage:WaitForChild("ParticleEmitter3D"))
```
Or if you chose to place the module inside of the ServerScriptService then you'll want to use:
```lua
    local ServerScriptService = game:GetService("ServerScriptService")
    local ParticleEmitter3D = require(ServerScriptService:WaitForChild("ParticleEmitter3D"))
```
