export const make = (name, percent) => {
    return {
        name: name, 
        damage: (helath) => Math.round(helath * (percent / 100)),
    };
};
