window.addEventListener('scroll', onScroll)
onScroll()//ao iniciar a pagina executa uma unica vez
function onScroll(){ // 1 responsabilidade  gerenciar todos as funcionalidades dos scrolls
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function showNavOnScroll(){ //1 responsabilidade mostras o navigation ao fazer o scroll
  if(scrollY > 0){
    navigation.classList.add('scroll')
  }else{
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll(){ //1 responsabilidade  mostrar o backToTopButton ao fazer scroll
  if(scrollY > 400){
    backToTopButton.classList.add('show')
  }else{
    backToTopButton.classList.remove('show')
  }
}

function openMenu(){
    document.body.classList.add('menu-expandido')
}
function closeMenu(){
    document.body.classList.remove('menu-expandido')
}

ScrollReveal({
  origin:'top',
  distance:'30px',
  duration: 700,
}).reveal('#home, #home img, #home .stats, #services,#services header, #services .card,#about,#about header, #about .content');

function activateMenuAtCurrentSection(section){

    //linha alvo
    const targetLine = scrollY + innerHeight / 2;

    //verificar se a seção passou
    //quais linhas vou precisar?

    //o topo da seção
    const sectionTop = section.offsetTop;
    //a altura da seção 
    const sectionHeight = section.offsetHeight;
    //o topo da seção chegou ou ultrapassou a linha alvo
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

    //informações dos dados e da lógica
    //console.log('O topo da seção chegou ou passou da linha?', sectionTopReachOrPassedTargetLine);

    //verificar se a base está abaixo da linha alvo
    //quais dados vou precisar?

    //a seção termina onde?
    const sectionEndsAt = sectionTop + sectionHeight;

    //o final da seção passou da linha alvo
    const sectionEndsAtPassedTargetLine = sectionEndsAt <= targetLine;
    //console.log('O Fundo da seção passou da linha?', sectionEndsAtPassedTargetLine);

    //limites da seção 
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndsAtPassedTargetLine;
    //console.log(sectionBoundaries)

    const sectionId = section.getAttribute('id');
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

    menuElement.classList.remove('active');
    if(sectionBoundaries){
      menuElement.classList.add('active')
    }
}


