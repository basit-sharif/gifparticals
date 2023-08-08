"use client"
import { loadFull } from "tsparticles";
import Particles from "react-particles";
import { useCallback } from "react";
import { Engine } from "tsparticles-engine";
import configs from "tsparticles-demo-configs";

const Basit = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return (
        <div>
            <Particles id={"props.id"} init={particlesInit} options={configs.basic} />
        </div>
    )
}

export default Basit