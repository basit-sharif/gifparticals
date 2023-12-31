import React, { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
// install only two tsparticles react-particles

export default function ParticlesContainer() {
    const customInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles options={
            {
                "autoPlay": true,
                "background": {
                    "color": {
                        "value": "#00000000"
                    },
                    "image": "",
                    "position": "",
                    "repeat": "",
                    "size": "",
                    "opacity": 0
                },
                "fullScreen": {
                    "zIndex": 1
                },
                "particles": {
                    "color": {
                        "value": [
                            "#1E00FF",
                            "#FF0061",
                            "#E1FF00",
                            "#00FF9E"
                        ]
                    },
                    "move": {
                        "decay": 0.05,
                        "direction": "top",
                        "enable": true,
                        "gravity": {
                            "enable": true
                        },
                        "outModes": {
                            "top": "none",
                            "default": "destroy"
                        },
                        "speed": {
                            "min": 50,
                            "max": 100
                        }
                    },
                    "number": {
                        "value": 0
                    },
                    "opacity": {
                        "value": 1
                    },
                    "rotate": {
                        "value": {
                            "min": 0,
                            "max": 360
                        },
                        "direction": "random",
                        "animation": {
                            "enable": true,
                            "speed": 30
                        }
                    },
                    "tilt": {
                        "direction": "random",
                        "enable": true,
                        "value": {
                            "min": 0,
                            "max": 360
                        },
                        "animation": {
                            "enable": true,
                            "speed": 30
                        }
                    },
                    "size": {
                        "value": 3,
                        "animation": {
                            "enable": true,
                            "startValue": "min",
                            "count": 1,
                            "speed": 16,
                            "sync": true
                        }
                    },
                    "roll": {
                        "darken": {
                            "enable": true,
                            "value": 25
                        },
                        "enlighten": {
                            "enable": true,
                            "value": 25
                        },
                        "enable": true,
                        "speed": {
                            "min": 5,
                            "max": 15
                        }
                    },
                    "wobble": {
                        "distance": 30,
                        "enable": true,
                        "speed": {
                            "min": -7,
                            "max": 7
                        }
                    },
                    "shape": {
                        "type": [
                            "circle",
                            "square"
                        ],
                        "options": {}
                    }
                },
                "pauseOnBlur": true,
                "pauseOnOutsideViewport": true,
                "responsive": [
                    {
                        "maxWidth": 1024,
                        "options": {
                            "particles": {
                                "move": {
                                    "speed": {
                                        "min": 33,
                                        "max": 66
                                    }
                                }
                            }
                        }
                    }
                ],
                "smooth": false,
                "style": {},
                "themes": [],
                "zLayers": 100,
                "emitters": {
                    "position": {
                        "x": 50,
                        "y": 100
                    },
                    "rate": {
                        "quantity": 5,
                        "delay": 0.15
                    }
                },
            }
        } init={customInit} />
    )
}