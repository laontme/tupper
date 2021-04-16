const desmosElement = $('#desmos')[0];
const desmos = Desmos.GraphingCalculator(desmosElement, {
  keypad: false,
  expressions: false,
  settingsMenu: false,
});

window.desmos = desmos;

desmos.setExpression({
  id: 'tupper',
  latex: '\\frac{1}{2}<\\operatorname{floor}\\left(\\operatorname{mod}\\left(\\operatorname{floor}\\left(\\frac{y}{17}\\right)\\cdot2^{-17\\cdot\\operatorname{floor}\\left(x\\right)-\\operatorname{mod}\\left(\\operatorname{floor}\\left(y\\right),17\\right)},2\\right)\\right)'
});

desmos.setExpression({
  id: 'limitx106',
  latex: 'x=106 + 0.5'
});
