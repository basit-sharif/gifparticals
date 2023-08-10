There are only two pages Home and /basit having two different animation confetti

## Getting Started

# i) First For /basit page , run these commands:

```bash
npm i tsparticles
npm i react-particles
```
and [1:- check documentation](https://particles.js.org/docs/index.html) 
[2:- check samples](https://particles.js.org/samples)
[3:- check npm package and details](https://www.npmjs.com/package/tsparticles)

# ii) Second for home page , run these commands:

```bash
npm i tsparticles
npm i react-particles
npm i tsparticles-demo-configs
```
and [check extra on npm](https://www.npmjs.com/package/tsparticles-demo-configs)

Note:- We installed tsparticles-demo-configs for pre build templetes which you can access by :
```
import configs from "tsparticles-demo-configs";
```
then use it like this: 
```
<Particles id={"props.id"} init={particlesInit} options={configs.basic} />
```
here you can get many pre built templetes confetti and illusions by utilizing ( configs. ) in options
[see in full details](https://github.com/basit-sharif/gifparticals/blob/master/src/app/basit/page.tsx)
