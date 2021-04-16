const examples = {
  tupper: {
    title: 'Формула Таппера',
    k: '4858450636189713423582095962494202044581400587983244549483093085061934704708809928450644769865524364849997247024915119110411605739177407856919754326571855442057210445735883681829823754139634338225199452191651284348332905131193199953502413758765239264874613394906870130562295813219481113685339535565290850023875092856892694555974281546386510730049106723058933586052544096664351265349363643957125565695936815184334857605266940161251266951421550539554519153785457525756590740540157929001765967965480064427829131488548259914721248506352686630476300'
  },
  pacman: {
    title: 'Пакман',
    k: '144520248970897582847942537337194567481277782215150702479718813968549088735682987348888251320905766438178883231976923440016667764749242125128995265907053708020473915320841631792025549005418004768657201699730466383394901601374319715520996181145249781945019068359500510657804325640801197867556863142280259694206254096081665642417367403946384170774537427319606443899923010379398938675025786929455234476319291860957618345432248004921728033349419816206749854472038193939738513848960476759782673313437697051994580681869819330446336774047268864'
  }
};

for (let key in examples) {
  if (examples.hasOwnProperty(key)) {
    const exampleElement = $(`<a href="" id="example-${key}">${examples[key].title}</a>`);
    exampleElement.on('click', event => {
      event.preventDefault();
      $('#var-k').val(examples[key].k);
      $('#k-img').trigger('click');
    });
    $('#examples').append(exampleElement);
    $('#examples').append(' ');
  }
}