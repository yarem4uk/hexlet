import { cons, l, random, head, reverse } from 'hexlet-pairs-data';

const run = (player1, player2, cards, customRandom) => {
    const iter = (health1, name1, health2, name2, order, log) => {
        if (health1 <= 0) {
            const last = head(log);
            last.message = `${name1} был убит`;
            return cons(last, log);
        }

        const card = customRandom(cards);
        const cardName = card.name;
        const points = card.damage(health2);
        const newHealth = health2 - points;

        const message = `Игрок '${name1}' применил '${cardName}' против '${name2}' и нанес урон '${points}'`;


        const stats = {
            health1: 0,
            health2: 0,
            message: message
        };

        if (order === 1) {
            stats.health1 =  health1;
            stats.health2 = newHealth;
        } else if (order === 2) {
            stats.health1 = newHealth;
            stats.health2 = health1;
        }

        const newLog = cons(stats, log);
        return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
    };
    const startHealth = 10;
    const logItem = {
        health1: startHealth,
        helath2: startHealth,
        message: 'Начинаем бой',
    };

    return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default (cards, f) => 
    (name1, name2) => 
        run(name1, name2, cards, f);
