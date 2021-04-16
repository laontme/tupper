const table = $('<table class="w-100"></table>');
let k, binPaint = [];

for (let rows = 0; rows < 17; rows++) {
  const row = $('<tr></tr>');
  for (let cols = 0; cols < 106; cols++) {
    row.append(`<td class="pixel" data-k="${17 - rows - 1}" data-x="${cols}"></td>`);
  }
  table.append(row);
}

$('#paint').append(table);

$('.pixel').click((event) => {
  $(event.target).addClass('pixel-selected');
  // console.log(event.target);
});

$('.pixel').contextmenu((event) => {
  // console.log(event.target);
  $(event.target).removeClass('pixel-selected');
  return false;
});

$('#img-k').on('click', (event) => {
  binPaint = [];
  for (let i = 0; i < 106; i++) {
    for (let j = 0; j < 17; j++) {
      const pixel = $(`[data-k=${j}][data-x=${i}]`);
      binPaint.push(Number(pixel.hasClass('pixel-selected')));
    }
  }

  binPaint.reverse();
  k = new BigNumber(binPaint.join(''), 2).times(17);

  if (k.comparedTo(999999976) == 1) {
    toast('Число слишком большое, вы не увидите график...', 'warning');
  } else {
    desmos.setExpression({
      id: 'limitk',
      latex: `y=${k.toNumber()}`
    });

    desmos.setExpression({
      id: 'limitk17',
      latex: `y=${k.toNumber()} + 17`
    });

    desmos.setMathBounds({
      bottom: k.toNumber() - 2,
      left: -1,
      right: 19,
      top: k.toNumber() - 2 + 17
    });
  }

  $('#var-k').val(k.toFixed());
});

$('#k-img').on('click', (event) => {
  $('.pixel-selected').each((i, element) => {
    $(element).removeClass('pixel-selected');
  });

  k = new BigNumber($('#var-k').val(), 10);

  if (k.modulo(17).toFixed() != 0) {
    toast('Число не кратно 17!', 'danger');
    return;
  }

  if (k.comparedTo(999999976) == 1) {
    toast('Число слишком большое, вы не увидите график...', 'warning');
  } else {
    desmos.setExpression({
      id: 'limitk',
      latex: `y=${k.toNumber()}`
    });

    desmos.setExpression({
      id: 'limitk17',
      latex: `y=${k.toNumber()} + 17`
    });

    desmos.setMathBounds({
      bottom: k.toNumber() - 2,
      left: -1,
      right: 19,
      top: k.toNumber() - 2 + 17
    });
  }

  k = k.dividedBy(17);
  if (k.comparedTo(1) == 0) {
    binPaint = ['0', '1'];
  } else if (k.comparedTo(0) == 0) {
    binPaint = ['0', '0'];
  } else {
    binPaint = Array.from(dec2bin(k).toFixed());
  }
  binPaint.reverse();

  // console.log(binPaint);

  let u = 0;
  for (let i = 0; i < 106; i++) {
    for (let j = 0; j < 17; j++) {
      const pixel = $(`[data-k=${j}][data-x=${i}]`);
      if (binPaint[u] === '1') {
        pixel.addClass('pixel-selected');
      }
      u++;
    }
  }
});


function dec2bin(a) {
  // console.log(a.toFixed());
  const mods = [];
  while (true) {
    mods.push(a.modulo(2).toFixed());
    a = a.dividedToIntegerBy(2);
    // console.log(a.toFixed());
    if (a == 1) {
      break;
    }
    // console.log(mods);
  }
  mods.push(1);

  return (BigNumber(mods.reverse().join('')));
}


function toast(message, color) {
  const toastElement = $('#toast');
  const toastBs = new bootstrap.Toast(toastElement[0]);
  toastElement.removeClass('bg-warning');
  toastElement.removeClass('bg-danger');
  toastElement.removeClass('bg-success');
  $('.toast-body').text('');

  toastElement.addClass(`bg-${color}`);
  $('.toast-body').text(message);

  toastBs.show();
}
