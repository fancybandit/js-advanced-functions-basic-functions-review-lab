function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
};

const mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
};

function wrapAdjective(visualFlair="*") {
    return function(adj="special") {
        return `You are ${visualFlair + adj + visualFlair}!`;
    };
};

const Calculator = {
    add: function() {return 1 + 3;},
    subtract: function() {return 1 - 3;},
    multiply: function() {return 1 * 3;},
    divide: function() {return 10 / 5;}
};

function actionApplyer(initNum, funcs) {
    if (funcs === [] || !!funcs === false) {
        return initNum;
    } else {
        let base = initNum;
        for (const func of funcs) {
            base = func(base);
        };
        return base;
    };
};