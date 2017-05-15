export const make = (name, simple) => {
    return {
        name: name,
        damage: () => simple,
    };
};
